import React, { useReducer } from 'react'

function CustomReducer(state,action){
  switch(action){
    case "inc": console.log('inc called')
    return {qnty:state.qnty+1}
    break;

    case "dec": console.log('dec calles')
    return state.qnty<=1 ?{qnty:1}:{qnty:state.qnty-1}
    break;

    case "clear": console.log('clear calld')
    return {qnty:1}
    break;

    default:
  }
}
function Ex2() {
  const initState ={qnty:1}
  //const [state,dispatcher] = useReducer(reducer,initialData)
  const [state,dispatcher] = useReducer(CustomReducer,initState)

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center ">
          <h3 className="display-5 text-warning">useReducer Hooks</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
        <p className="text-dark">
          This hook is an alternative to useState, which you have complex state logic. 
          it takes reducer function and an initial state or data , and returns the current state dispatch function to update it <br /></p>
          <p>const [state,dispatcher] = useReducer(reducer,initialData)</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
           <h1 className="text-success">state={state.qnty}</h1>
           <button className="btn btn-success" onClick={()=>dispatcher(`inc`)}>Add</button>
           <button className="btn btn-warning" onClick={()=>dispatcher(`dec`)}>Dec</button>
           <button className="btn btn-danger" onClick={()=>dispatcher('clear')}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Ex2