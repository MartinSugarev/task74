import "./App.css";
import React, { useState, useMemo, useEffect } from 'react'

function App() {

const [text, SetText] = useState('');
//const [isNumber, SetIsNumber] = useState(false)

useEffect(() => {
  console.log(boo);
  
}, [text])


const boo = useMemo(() => {
  let r = /^\d+$/;
  let isN = text.match(r);
  return isN
}, [text])

function reg(e){
 //let r = /^\d+$/;
 //if(e.target.value.match(r)){
   SetText(number => e.target.value);
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
          value={text}
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
