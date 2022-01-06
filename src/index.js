import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BrowserRouter from 'react-router-dom/BrowserRouter';




// TEST BUILD DECEMBER

// import React, { useState } from "react";




const initialState = {}
 

// function testroom1reducer(state, action) {
//   switch (action.type) {
//     case 'action_1':
//       return { ...state, first_action: action.answer };
//     case 'action_2':
//       return { ...state, second_action: action.answer };
//     default: 
//       throw new Error();
//   }
// }

// function Choose1() {
//   const [state, dispatch] = useReducer(testroom1reducer, initialState);
//   return (
//     <>
//      <div>
//       <h2>What are you gonna do?</h2>
//       <button onClick={() => dispatch({type: 'action_1', answer: 'eat' })}>Eat</button>
//       <button onClick={() => dispatch({type: 'action_1', answer: 'puke' })}>Puke</button>
//      </div>
//      {state.first_action !== undefined && 
//       <>
//         <p>You decided to {state.first_action}.</p>
//         {state.first_action === 'puke' && 
//           <>
//             <h2>How are you going to clean yourself up?</h2>
//             <button onClick={() => dispatch({type: 'action_2', answer: 'shower' })}>Shower</button>
//             <button onClick={() => dispatch({type: 'action_2', answer: 'call mom' })}>Call Mom</button>
//           </>
//         }
//       </>
//      }
//      {state.second_action !== undefined && 
//       <p>You then decided to {state.second_action}.</p>
//      }
//     </>
//   );
// }

// const ButtonExample = () => {
//   const [status, setStatus] = useState(false);

//   return (
//     <div className="textline" onClick={() => 
//     setStatus(!status)}>
//       {`${status ? 'By the time your body was found I had already written it that way' : 'When my body is found, the snow will have fallen like a killstreak, and the world will know peace.'}`}
      
//     </div>
    
//   );
// };

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let lineClass = ["line"];
    if(this.state.addClass) {
      lineClass.push('red');
    }
    return(
        <div className={lineClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "When my body is found, the snow will have fallen like a killstreak, and the world will know peace.  " : "By the time your body was found I had already written it that way. "}</div>       
    );
  }
}

class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let lineClass = ["line"];
    if(this.state.addClass) {
      lineClass.push('red');
    }
    return(
        <div className={lineClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Written this way across your resting percocet face in the drainedout LCD hale.  " : "You were writing too but in smaller and smaller sentences and more and more quickly until your words were like snow. "}</div>       
    );
  }
}
// ReactDOM.render(<App />, document.getElementById("root"));



ReactDOM.render(
  <React.StrictMode>
    {/* <Choose1 /> */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Sample />
    <Sample2 />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
