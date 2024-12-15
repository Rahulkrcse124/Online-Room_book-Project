import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Loginscreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    const user = { email, password }

    // user = {
    //   email: "Anuradha@gmail.com",
    //   password: "Anu@1234#"
    // }

    try {
      const res = await axios.post('http://localhost:1300/api/users/login', user);
      console.log('response is', res)

      if (!res.data?.message) {
        toast.success('Login successful. . .');
        localStorage.setItem('currentuser', JSON.stringify(res.data));
        navigate('/rooms')
        // window.location.href = '/';
      }
      else {
        toast.error(res.data.message);
      }
      // console.log('res is', res);
      // console.log('user is', user);
      // console.log('res data is', res.data);

    } catch (error) {
      toast.error(error.message);
    }

  }


  return (
    <>
      <Toaster />
      <div className=' pt-2 pb-2 mt-5' style={{ display: 'block', margin: 'auto', width: '80%' }}>
        {/* {loading && (<Loader />)} */}
        <div className="row shadow justify-content-center mt-5 py-4" style={{ borderRadius: '5px' }} >
          <div className="col-md-7 p-4">
            {/* {error && (<Error message='Invalid Credentials' />)} */}
            <div>
              <h3>Welcome to <span>Login page</span></h3>
              <input type="text" className='form-control my-3' placeholder='Enter your email' value={email} onChange={handleEmail} />
              <input type="password" className='form-control my-3' placeholder='Enter your password' value={password} onChange={handlePassword} />
              <button className='btn btn-sm btn-primary' onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Loginscreen