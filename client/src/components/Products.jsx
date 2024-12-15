import React from 'react'
import cardData from "../CardData.json";
import Card from './Card';

function Products() {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between">
        {
          cardData.map(item => <Card data={item} />)
        }
      </div>
    </>
  )
}

export default Products