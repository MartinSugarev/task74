import React, { useState, useMemo } from 'react'
import "./App.css";

function App() {

const [text, Settext] = useState({textt: ""});
//const [isNumber, SetIsNumber] = useState(false)


const boo = useMemo(() => {
  let r = /^\d+$/;
  
  if(text.textt.match(r)){
   return true
  }else{
    return false
  }
  
}, [text])

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
         value={text.textt}
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => {
            Settext(prev => {
              return {...prev, textt: e.target.value}
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
