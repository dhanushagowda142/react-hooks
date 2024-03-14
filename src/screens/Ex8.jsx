import React, { useMemo, useState } from 'react'
import Marks from '../pages/Marks'
import Info1 from '../pages/Info1'


function Ex8() {
  const [age,setAge] = useState(10)
  
  const incAge = (val) =>{
    setAge(age+ val)
  }

  const  rajsAge = useMemo(() => ({
      result :`Raju's age is ${age} years`
  }),[age])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useMemo Hook</h3>
            </div>
        </div>
        <Marks age={age} add={incAge} />
        <Info1 txt={rajsAge} />
    </div>
  )
}

export default Ex8