import React, { useState, useMemo  } from 'react'
import "./App.css";

function App() {

const [text, Settext] = useState(null);
//const [isNumber, SetIsNumber] = useState(false)

function check(v){
  let r = /^\d+$/;
  if(text){
  if(v.match(r)){
   return true
  }else{
    return false
  }
}
}

const boo = useMemo(() => {

 return check(text)
  
}, [text])



  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          value={text}
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
