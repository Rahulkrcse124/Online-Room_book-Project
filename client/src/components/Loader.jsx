import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Toaster, toast } from 'react-hot-toast'


const override = `
  display: "block",
  margin: "0 auto",
  borderColor: "red",
`;

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");



  // useEffect(() => {
  //   toast.success('Loading. . .',{
  //     duration: 6000,
  //   });
  // }, [])



  return (
    <>
      {/* <Toaster /> */}
      
      <div className="sweet-loading">
        <HashLoader color={color} loading={loading} css='' size={80} style={{ display: 'block', margin: '0 auto' }} />
      </div>
    </>
  )
}

export default Loader