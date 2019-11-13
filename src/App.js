import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import DemoClassComponent from './components/DemoClassComponent';
// import DemoFunctionComponent from './components/DemoFunctionComponent';
import Avatar from './avatar/Avatar';
import AvatarClass from './avatar/AvatarClass';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <DemoClassComponent name="i am class component prop" /> */}
      {/* <DemoFunctionComponent name="i am function component prop" /> */}
      <Avatar />
      <AvatarClass />
    </div>
  );
}

export default App;
