import React from 'react'
import Carousal from './Carousal'
import Card from './Card'
import cardData from "../CardData.json";
import About from './About';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* {
        (!localStorage.getItem('currentuser')) ? navigate('/') : null
      } */}
      <Carousal />
      <About />

      {/* 
      <div className="d-flex flex-wrap justify-content-between">
        {
          cardData.map(item => <Card data={item} />)
        }
      </div> */}

    </>
  )
}

export default Home