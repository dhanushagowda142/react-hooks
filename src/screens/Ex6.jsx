import React, { useRef, useState } from 'react'

function Ex6() {
  const x = useRef()

  const handler = ()=>{
    console.log('clicked')
    console.log(x.current.value)
    if(x.current.value===""){
      x.current.classList.add('bg-warning')
      setTimeout(()=>{
        x.current.classList.remove("bg-warning")
      },3000)
    }else{
      x.current.classList.add("bg-success")
      setTimeout(() => {
        x.current.classList.remove("bg-success")
      }, 3000);
    }
  }

  const [len,setLen]=useState(0)
  const fname=useRef()
  const femail = useRef()
  const fdate = useRef()
  const ftext = useRef()

  const submitHandler=()=>{
    let data = {
      name:fname.current.value,
      email: femail.current.value,
      date: fdate.current.value,
      text:ftext.current.value
      }
      console.log('final',data)
  }

  const textHandler=()=>{
    if(ftext.current.value.length > 40){
      console.log("text")
    }else{
        setLen(ftext.current.value.length)
    }
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useRef Hook</h3>
            </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 id="title" className="display-1 text-danger">Test Title</h1>
            <div className="form-group">
              <input type="text" name='text' id='test'  className='form-control' />
            </div>
            <div className="form-group">
              <button className="btn btn-danger" >Click me</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" name='name' id='name' ref={fname}  className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" name='email' id='email' ref={femail} className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="">DOB</label>
                <input type="date" name='date' id='date' ref={fdate} className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="" className='text-center'>Text Here</label>
                <textarea name="text" id="text" cols="25" rows="5" ref={ftext} onKeyUp={textHandler} className='form-control'></textarea>
                <strong className='text-strong' id='msgLen'>{len}</strong>
              </div>
              <div className="form-group">
                <button className="btn btn-danger" onClick={submitHandler}>Click me</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
// target dom reference, target  html DOM,name of the ref.current.name of the attributes 


export default Ex6