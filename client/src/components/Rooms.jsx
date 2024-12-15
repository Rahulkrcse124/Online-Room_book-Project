import React, { useEffect, useState } from 'react'
import Card from './Card'
import Home from './Home'
import axios from 'axios';

function Rooms(props) {

  // let rooms = ['room1.jpg', 'room2.jpg', 'room3.jpg', 'room4.jpg', 'room5.jpg', 'room6.jpg', 'room1.jpg', 'room2.jpg', 'room3.jpg']
  const [rooms, setRooms] = useState([]);


  const fetchallrooms = async () => {
    // console.log('function called');
    // debugger;


    try {
      const res = await axios.get('http://localhost:1300/api/rooms/getallrooms');
      console.log('data is', res.data);
      setRooms(res.data)
    } catch (error) {
      console.log('error is', error)
    }
  }



  useEffect(() => {
    fetchallrooms();
  }, [])


  return (
    <>
      {/* <Home /> */}
      <section id="rooms" className="rooms_wrapper">
        <div className="section-title text-center mb-5">
          <h6>What I can do for you</h6>
          <h3>Our Favorite Rooms</h3>
        </div>

        <div className="d-flex flex-wrap justify-content-between">
          {
            // rooms.map(roomName => <Card imgUrl={`./images/room/${roomName}`} />)
            rooms.length > 0 && rooms?.map(room => <Card imgUrl={room.imageurls[0]} />)
          }


          {/* 
          <Card imgUrl={'./images/room/room2.jpg'} />
          <Card imgUrl={'./images/room/room3.jpg'} />
          <Card imgUrl={'./images/room/room4.jpg'} />
          <Card imgUrl={'./images/room/room5.jpg'} />
          <Card imgUrl={'./images/room/room6.jpg'} />
          <Card imgUrl={'./images/room/room1.jpg'} />
           */}

        </div>

      </section >
    </>
  )
}

export default Rooms