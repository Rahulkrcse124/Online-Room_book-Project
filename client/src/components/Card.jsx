import React from 'react'

function Card(props) {
  console.log('props is', props.imgUrl)

  return (
    <>
      <div className="card my-2" style={{ width: '25rem' }}>
        <img src={props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.Title}</h5>
          <p className="card-text">{props.Text}</p>
          <h5 className="mb-4 fst-italic">₹ 18,000
            <span className="fw-light text-decoration-line-through"> ₹ 9,000</span>
            <span className="text-success"> 50% off</span>
          </h5>

          <a href="#" className="btn btn-primary">Explore More</a>
        </div>
      </div>



    </>
  )
}

export default Card