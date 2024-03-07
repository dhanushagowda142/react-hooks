import React, { useState } from 'react'

function Ex1() {
  //const [state,handler] = useState(initialvalue)
  const [num,setNum]=useState(0)

  const addval = (val) =>{
    setNum(num+val)
  }

  const delVal=(val)=>{
    setNum(num-val)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-5 text-warning">useState Hooks</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="text-success">num={num}</h3>
          <button className="btn btn-primary" onClick={()=> addval(1)}>Add +1</button>
          <button className="btn btn-primary ms-2" onClick={()=> delVal(1)}>delete -1</button>
        </div>
      </div>
    </div>
  )
}

export default Ex1