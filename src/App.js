import "./App.css";
import React, { useState, useMemo, useEffect } from 'react'

function App() {

const [number, SetNumber] = useState('');
//const [isNumber, SetIsNumber] = useState(false)

useEffect(() => {
  console.log(boo);
  
}, [number])


const boo = useMemo(() => {
  let r = /^\d+$/;
  let isN = number.match(r);
  return isN
}, [number])

function reg(e){
 //let r = /^\d+$/;
 //if(e.target.value.match(r)){
   SetNumber(number => e.target.value);
  // SetIsNumber(true);
 //}
 //else{
  //SetNumber(number => e.target.value);
  //SetIsNumber(false);
 //}
}




  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={number}
          onChange={(e) => {
            reg(e)
          }}
           />
        <span className="icon is-small is-right">
          <i className={boo ? "fas fa-check" :"fas fa-times"} />
        </span> 
      </div>
    </div>
  );
}

export default App;
