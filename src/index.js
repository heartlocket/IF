import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// TEST BUILD DECEMBER


const initialState = {}
 

function testroom1reducer(state, action) {
  switch (action.type) {
    case 'action_1':
      return { ...state, first_action: action.answer };
    case 'action_2':
      return { ...state, second_action: action.answer };
    default: 
      throw new Error();
  }
}

function Choose1() {
  const [state, dispatch] = useReducer(testroom1reducer, initialState);
  return (
    <>
     <div>
      <h2>What are you gonna do?</h2>
      <button onClick={() => dispatch({type: 'action_1', answer: 'eat' })}>Eat</button>
      <button onClick={() => dispatch({type: 'action_1', answer: 'puke' })}>Puke</button>
     </div>
     {state.first_action !== undefined && 
      <>
        <p>You decided to {state.first_action}.</p>
        {state.first_action === 'puke' && 
          <>
            <h2>How are you going to clean yourself up?</h2>
            <button onClick={() => dispatch({type: 'action_2', answer: 'shower' })}>Shower</button>
            <button onClick={() => dispatch({type: 'action_2', answer: 'call mom' })}>Call Mom</button>
          </>
        }
      </>
     }
     {state.second_action !== undefined && 
      <p>You then decided to {state.second_action}.</p>
     }
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
