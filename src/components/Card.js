import React from 'react'

export default function Card() {
  return (
    <div>
    <div className="card mt-3" style={{"maxHeight":"360px","width": "18rem"}}>
      <img src="https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg" className="card-img-top" style={{"maxHeight":"180px","width": "18rem"}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="container w-100">
          {/* The below javascript is just for quantity representation of the items */}
          <select className="m-2 bg-success rounded">
            {Array.from(Array(6),(e,i) => {
                return(
                  <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
          </select>

          {/* The below javascript is just for whether you want half, full, or medium */}
          <select className="m-2 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
          </select>

          {/* General text as an information */}
          <div className="d-inline h-100 fs-5">
            Total Price
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
