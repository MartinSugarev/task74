import "./App.css";
import React, { useState, useMemo } from 'react'

function App() {

const [text, SetText] = useState('');
const [isNumber, SetIsNumber] = useState(false)

const boo = useMemo(() => {
  let r = /^\d+$/;
  let isN = text.match(r);
  if(isN){
    SetIsNumber(true)
  }else{
    SetIsNumber(false)
  }
  return isN
}, [text])

function reg(e){
 //let r = /^\d+$/;
 //if(e.target.value.match(r)){
   SetText(e.target.value);
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
         value={text}
          className="input is-large"
          type="text"
          placeholder="Enter number..."
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
