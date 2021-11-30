import React, { useState, useEffect, useRef } from 'react';

import './App.css';

const setDefaultValue = () => {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
};

const App = () => {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCounting] = useState(false);
  const timerIdRef = useRef(null);

  const onStartStop = () => {
    if (isCounting) {
      setIsCounting(false);
    } else {
      setIsCounting(true);
    }
  };

  const handleReset = () => {
    clearInterval(timerIdRef.current);
    setIsCounting(false);
    setCount(0);
  };

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCont) => prevCont + 1);
      }, 1000);
    }

    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div className='App'>
      <h1>React Timer</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={onStartStop}>{isCounting ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
