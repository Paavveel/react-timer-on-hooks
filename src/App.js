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
        setCount(prevCont => prevCont + 1);
      }, 1000);
    }

    return () => {
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div className='App'>
      <div className='timer-container'>
        <h1>React Timer</h1>
        <h2>{count}</h2>
        <div className='btns-container '>
          <a
            className='waves-effect waves-light btn-large'
            onClick={onStartStop}
          >
            {isCounting ? 'Stop' : 'Start'}
          </a>
          <a
            className='waves-effect waves-light btn-large'
            onClick={handleReset}
          >
            Reset
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
