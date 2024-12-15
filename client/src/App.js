import './App.css';
import './index.css';
import Carousal from './components/Carousal';
import Navbar from './components/Navbar';
import cardData from './CardData.json'
import Card from './components/Card';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Rooms from './components/Rooms';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import { useEffect } from 'react';


function App() {


  const RedirectToHome = () => {

    const navigate = useNavigate();
    useEffect(() => {
      navigate('/');
    }, [navigate]);

    return null;
  };

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {localStorage.getItem('currentuser') && <Route path='/rooms' element={<Rooms />} />}
          <Route path='/register' element={<Registerscreen />} />
          <Route path='/login' element={<Loginscreen />} />
          <Route path='*' element={<RedirectToHome />} />
          {/* <Route path='*' element={<Navigate />} /> */}

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
