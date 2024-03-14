import React from 'react'

function Info1(props) {
  return (
    <div className="row">
        <div className="col-md-12 text-center">
            <h2 className="display-3 text-warning">
                {props.txt.result}
            </h2>
        </div>
    </div>
  )
}

export default Info1