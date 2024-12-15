import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
  const [fromdate, setFromdate] = useState()
  const [todate, setTodate] = useState()
  const [duplicaterooms, setDuplicaterooms] = useState([])

  const fetchallrooms = async () => {
    // console.log('function called');
    // debugger;


    try {
      setLoading(true);
      const res = await axios.get('http://localhost:1300/api/rooms/getallrooms');
      // console.log('data is', res.data);
      setRooms(res.data)
      setDuplicaterooms(res.data)
      setLoading(false);

    } catch (error) {
      setError(true)
      // console.log('error is', error)
      setLoading(false);
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

    var tempRooms = []
    var availablity = false

    for (const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {
        
        for (const booking of room.currentbookings) {
          if (!moment(passFromDate).isBetween(booking.fromdate, booking.todate) && !moment(passToDate).isBetween(booking.fromdate, booking.todate)) {

            if (
              passFromDate !== booking.fromdate &&
              passFromDate !== booking.todate &&
              passToDate !== booking.fromdate &&
              passToDate !== booking.todate
            ) {
              availablity = true;
            }
          }
        }
      }

      if (availablity == true || room.currentbookings.length == 0) {
        tempRooms.push(room)
      }

      setRooms(tempRooms)
    }
  }

  useEffect(() => {
    fetchallrooms();
  }, [])

  // console.log('to date', todate)
  // console.log('from date', fromdate)

  return (
    <>
      <div className='container'>
        <div className="row mt-2">
          <div className="col-md-3">
            <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          {loading ? (
            <h1><Loader /></h1>
          ) : rooms.length > 1 ? (
            rooms.map((room, i) => {
              return <div className="col-md-9 mt-2" key={i}>
                <Room room={room} id={i} fromdate={fromdate} todate={todate} />
              </div>
            })
          ) : (
            <Error />
          )}

        </div>
      </div>
    </>
  )
}

export default Homescreen