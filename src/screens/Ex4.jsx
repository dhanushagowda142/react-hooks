import React, { useLayoutEffect, useState } from 'react'

function Ex4() {
  const [num,setNum] =useState(0)

  const addValue=(val)=>{
    setNum(num+val)
  }

  //useLayoutEffect(callback,[dep])
  useLayoutEffect(() =>{
      console.log(`layout effect triggerd , current state= ${num}`)
  },[num])

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="diplay-5 text-warning">useLayoutEffect hook</h3>
         </div>
       </div>
       <div className="row">
        <div className="col-md-12">
          <p className="text-secondary">
            which has same signature(structure) to useEffect <br />

            But it fires synchronously(direct call) after all DOM mutations <br />

            use this to read layout from the DOM and synchronously re-render the component <br />

            Updates scheduled inside useLayoutEffect will be flushed synchronously,
            before the browser has a chance to paint (mounting of DOM) <br />

            If you are comparing with class component methods, useLayoutEffect fires same as like
            componentDidMount(), and componentDidUpdate
          </p>
        </div>
       </div>

       <div className="row">
         <div className="col-md-12">
          <h1 className='text-success'>number = {num}</h1>
          <button className='btn btn-success' onClick={()=>addValue(1)}>Add +1</button>
         </div>
       </div>
   </div>
  )
}

export default Ex4