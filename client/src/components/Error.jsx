import React, { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
function Error({ message }) {

  // useEffect(() => {
  //   toast.success('Loading. . .');
  // }, [])

  return (
    <>
      {/* <Toaster /> */}
      <div className="alert alert-danger text-center" role="alert" style={{ width: 'fit-content', margin: '0 auto' }}>
        {message} || Something went wrong, Please try again later . . .
      </div>
    </>
  )
}

export default Error