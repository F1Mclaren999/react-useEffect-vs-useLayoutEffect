import React, { StrictMode, useState, useEffect, useLayoutEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [name, setName] = useState('pingPong');
  const [count, setCount] = useState(0);
  const [ar, setAr] = useState([]);

  // useEffect(() => {
  //   // console.log('I am useEffect!');
  //   const arr = Array(count).fill('#');
  //   setAr(arr);
  // }, [count]);

  useLayoutEffect(() => {
    const arr = Array(count).fill('#');
    setAr(arr);
  }, [count]);

  return (
    <div id="main">
      <h3>Hello, {name}</h3>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount(20000)}>200</button> &nbsp;
      <button onClick={() => setCount(40000)}>400</button> &nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
      <div style={{ display: 'inline' }}>{ar.map((e) => e)}</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
