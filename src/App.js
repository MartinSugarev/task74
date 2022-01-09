import "./App.css";
import React, { useState, useMemo, useEffect } from 'react'

function App() {

const [state, SetState] = useState({text: ''});
//const [isNumber, SetIsNumber] = useState(false)


const boo = useMemo(() => {
  let r = /^\d+$/;
  
  if(state.text.match(r)){
   return true
  }else{
    return false
  }
  
}, [state.text])

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
         value={state.text}
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => {
            SetState(prevValue => {
              return {...prevValue, text: e.target.value}
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
