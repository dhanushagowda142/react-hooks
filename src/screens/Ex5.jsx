import React, { useEffect, useState } from 'react'

function Ex5() {
    const [num,setNum] =useState(0)
    
    const addValue=(val)=>{
        setNum(num+val)
    }

    useEffect(()=>{
        console.log(`use effect invoked, state =${num}`)

        return ()=>{
            console.log('count terminated...bye')
        }
    },[num])

  return (
    <div className="container">
        <div className="row">
        <div className="col-md-12 display-3 text-success">UseEffect</div>
        </div>

        <div className="row">
            <div className="col-md-12">
                <h1 className="text-secondary">number={num}</h1>
                <button className="btn btn-success " onClick={()=>addValue(1)}>add+1</button>
            </div>
        </div>
    </div>
  )
}

export default Ex5