// Import the React and ReactDOM libraries
// const React = require('react')
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => 'Click Me!'

// Create a react component
const App = () => {
    

    return (
        <div>
            <label className="lable" for="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                { getButtonText() }
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />, 
//   document.getElementById('root')
    document.querySelector('#root')
);