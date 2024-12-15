import React from 'react'

function Success({ message }) {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        {message} || successful
      </div>

    </>
  )
}

export default Success