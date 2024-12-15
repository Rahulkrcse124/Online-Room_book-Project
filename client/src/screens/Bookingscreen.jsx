import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import toast, { Toaster } from 'react-hot-toast';

function Bookingscreen({ match }) {
  const [room, setRoom] = useState();
  const [totalamount, setTotalamount] = useState()

  // const { id } = useParams();
  // or
  const params = useParams();
  const id = params.id;

  const fromdate = params.fromdate;
  const todate = params.todate;

  const fromDate = moment(fromdate, 'YYYY-MM-DD');
  const toDate = moment(todate, 'YYYY-MM-DD');

  const totalDays = toDate.diff(fromDate, 'days') + 1;
  // or we can use also
  // const totalDays = moment.duration(toDate.diff(fromDate)).asDays();


  console.log('total days are', totalDays);


  // console.log("id is", id);

  const getroombyid = async () => {
    // console.log('function called');
    // debugger;
    // console.log('room id is', id)
    try {
      const res = await axios.post(`http://localhost:1300/api/rooms/getroombyid/${id}`);

      // console.log('data is', res.data);
      setTotalamount(res.data.rentperday * totalDays)
      setRoom(res.data)
    } catch (error) {
      console.log('error is', error)
    }
  }



  const bookRoom = async () => {
    const bookingDetails = {
      room,
      userid: JSON.parse(localStorage.getItem('currentuser'))._id,
      fromdate,
      todate,
      totalamount,
      totalDays,
    }

    // console.log('booking details are', bookingDetails)

    try {
      const result = await axios.post('http://localhost:1300/api/bookings/bookroom', bookingDetails);
      toast.success(result.data);
      // console.log('result is', result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getroombyid();
  }, [])


  return (
    <>
      <Toaster />
      <div className='m-5 bookingpage'>
        {room &&
          (
            <div>
              <div className="row justify-content-center mt-5 bs p-5">
                <div className="col-md-6">
                  <h1>{room.name}</h1>
                  <img src={room.imageurls[0]} className='bigimg smallimg ' alt="" />
                </div>

                <div className="col-md-6" style={{ textAlign: 'right' }}>
                  <div>
                    <h1>Booking Details</h1>
                    <hr />
                    <b>
                      <p>Name :{JSON.parse(localStorage.getItem('currentuser')).name}</p>
                      <p>From Date :{fromdate}</p>
                      <p>To Date :{todate}</p>
                      <p>Max Count : {room.maxcount}</p>
                    </b>
                  </div>

                  <div>
                    <h1>Amount</h1>
                    <hr />
                    <b>
                      <p>Total Days : {totalDays && totalDays}</p>
                      <p>Rent Per Day : {room.rentperday}</p>
                      <p>Total Amount : {totalamount}</p>
                    </b>
                  </div>

                  <div style={{ float: 'right' }}>
                    <button className='btn btn-sm btn-primary' onClick={bookRoom}>Pay Now</button>
                  </div>

                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Bookingscreen