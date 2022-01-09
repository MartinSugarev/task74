import React, { useState, useMemo } from 'react'
import "./App.css";

function App() {

const [text, Settext] = useState("");
//const [isNumber, SetIsNumber] = useState(false)


const boo = useMemo(() => {
  let r = /^\d+$/;
  
  if(text.match(r)){
   return true
  }else{
    return false
  }
  
}, [text])

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => {
            Settext(text => {
              return text = e.target.value
            })
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
