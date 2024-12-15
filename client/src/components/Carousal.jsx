import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import Rooms from './Rooms';
const { RangePicker } = DatePicker;


function Carousal() {
  const [rooms, setRooms] = useState([]);
  const [fromdate, setFromdate] = useState()
  const [todate, setTodate] = useState()


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


  function filterByDate(dates) {
    // console.log('to date are', moment(dates[0])._i.format('YYYY-MM-DD'))
    // console.log('from date are', moment(dates[1])._i.format('YYYY-MM-DD'))

    setFromdate(moment(dates[0])._i.format('YYYY-MM-DD'));
    setTodate(moment(dates[1])._i.format('YYYY-MM-DD'))

    // debugger;
    const passFromDate = moment(dates[0])._i.format('DD-MM-YYYY')
    const passToDate = moment(dates[1])._i.format('DD-MM-YYYY')

    console.log('from date fr is', passFromDate)
    console.log('to date to is', passToDate)
  }


  useEffect(() => {
    fetchallrooms();
  }, [])

  console.log("room lenth is", rooms.length)
  return (
    <>

      <section id="home" className="banner_wrapper p-0">

        <div id='carouselExampleInterval' className="swiper carousel slide" data-bs-ride="carousel">
          <div className="swiper-wrapper carousel-inner">

            <div className="carousel-item active" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/zero.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/one.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai...</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/two.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/three.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai...</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/four.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai...</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/five.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai...</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/six.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai...</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000" style={{ backgroundImage: 'url(./img/seven.jpg)' }}>
              <div className="slide-caption text-center">
                <div>
                  <h1>welcome to hotel in Thai...</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="container booking-area">
          <form className="row">

            <div className="col-lg mb-3 mb-lg-0">
              {/* <input type="date" className="form-control" placeholder="Start Date"/> */}
              <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
            </div>

            <div className="col-lg mb-3 mb-lg-0">
              <input type="date" className="form-control" placeholder="Date" />
            </div>
            <div className="col-lg mb-3 mb-lg-0">
              <select className="form-select">
                <option selected>Adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="col-lg mb-3 mb-lg-0">
              <select className="form-select">
                <option selected>Kids</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="col-lg mb-3 mb-lg-0">
              <button type="submit" className="main-btn chk rounded-2 px-lg-3">Check Availability</button>
            </div>
          </form>
        </div>
      </section>
      {/* 
          {rooms.length > 1 &&
            rooms.map((room, i) => <Rooms room={room} id={i} fromdate={fromdate} todate={todate} />)
          } */}

      {rooms.length > 1 && <Rooms rooms={rooms} fromdate={fromdate} todate={todate} />}


    </>
  )
}

export default Carousal