import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import Success from '../components/Success';

function Registerscreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleCpassword = (e) => {
    setCpassword(e.target.value)
  }

  const handleRegister = async () => {
    if (password === cpassword) {

      const user = { name, email, password, cpassword }

      // user = {
      //   name: "pankaj",
      //   email: "pankaj@gmail.com",
      //   password: "Pankaj@1234#",
      //   cpassword: "Pankaj@1234#"
      // }

      // npm i axios
      try {
        const res = await axios.post('http://localhost:1300/api/users/register', user);

        setName('');
        setEmail('');
        setPassword('');
        setCpassword('');
        toast.success(res.data)
        console.log('res is', res.data);
        navigate('/login')
      } catch (error) {
        toast.error(error);
        // setLoading(false)
        // setError(true)
      }
    }
    else {
      toast.error('Password does not matched');
    }
  }


  return (
    <>
      <Toaster />
      <div className='py-5 mt-2' style={{ display: 'block', margin: 'auto', width: '80%' }}>
        {/* {loading && <Loader />}
        {error && (<Error />)}
        {success && (<Success message="Registration successful" />)} */}

        <div className="row shadow justify-content-center py-4" style={{ borderRadius: '5px' }} >
          <div className="col-md-7 p-4">
            <div>
              <h3>Welcome to <span>Registration page</span></h3>
              <input type="text" className='form-control my-3' placeholder='Enter your name' value={name} onChange={handleName} />
              <input type="text" className='form-control my-3' placeholder='Enter your email' value={email} onChange={handleEmail} />
              <input type="text" className='form-control my-3' placeholder='Enter your password' value={password} onChange={handlePassword} />
              <input type="text" className='form-control my-3' placeholder='Enter confirm password' value={cpassword} onChange={handleCpassword} />
              <button className='btn btn-sm btn-primary' onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registerscreen