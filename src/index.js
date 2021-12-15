import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// TEST BUILD DECEMBER


const initialState = {
     initialState_choice1 : 'yes',
     initialState_choice2 : 'yes',
     initialState_choice3 : 'yes'
   }
 

function testroom1reducer(state, action) {
  switch (action.type) {
    case 'yes':
      return {initialState_choice1: 'yes'};
    case 'no':
      return {initialState_choice1: 'no'};
    default: 
      throw new Error();
  }
}

function Choose1() {
  const [state, dispatch] = useReducer(testroom1reducer, initialState);
  return (
    <>
     initialState
     <button onClick={() => dispatch({type: 'yes'})}>yes</button>
     <button onClick={() => dispatch({type: 'no'})}>no</button>
     </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Choose1 />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
