import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First , {Third, Fourth} from './First';
import Second from './Second';

var name="Ajay";
const ele2 = React.createElement("h1", {className:'class1'} , "Hello All ", name);
const ele = <h1 className='class1'> Hello Everyone from {name} </h1>; 
const list = <ul>
  <li className='class1'> element 1 </li>
  <li> element 2 </li>
  <li> element 3 </li>
</ul>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {list} {ele2} {ele} <App/> <First/> <Second name="Lalit"/>
   <Second name="Manoj" address="delhi"/>
   <Second name="Karan"/>
   <Second name="Yojna"/> <Third/> <Fourth/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
