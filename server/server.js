const port = 1300

// npm i express
const express = require('express');
const app = express();
app.use(express.json());

// npm i cors
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend Server Has been Successfully Started ..........')
})

// npm i mongoose
const connectDb = require('./db');
connectDb();

// app.get('/api/rooms/getallrooms', (req, res) => {

//   res.send({
//     message: "ok",
//     success: 200
//   })

// })


// http://localhost:1300/api/rooms
const roomsRoute = require('./routes/roomsRoute');
app.use('/api/rooms', roomsRoute);

// http://localhost:1300/api/users
// http://localhost:1300/api/users/login
const usersRoute = require('./routes/usersRoute');
app.use('/api/users', usersRoute);

// http://localhost:1300/api/bookings
const bookingRoute = require('./routes/bookingsRoute')
app.use('/api/bookings', bookingRoute)


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port} 🔥`);
})
