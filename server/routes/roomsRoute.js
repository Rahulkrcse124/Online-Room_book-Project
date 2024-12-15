// npm i router
const express = require('express');
const router = express.Router();

const Room = require('../models/room');
// const roomController = require('../controllers/roomController');

router.get('/getallrooms', async (req, res) => {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error })
  }

})


router.post('/getroombyid/:roomid', async (req, res) => {
  const id = req.params.roomid;
  console.log('room id is', id);

  try {
    console.log("get particular room by id api hitted");
    const room = await Room.findById(req.params.roomid);

    if (room)
      res.status(200).json(room);
    else
      res.status(404).json({ message: "room not found" });
  } catch (error) {
    return res.status(400).json({ message: "room not founds" })
  }

})




// router.get('/getallrooms', (req, res) => {
//   res.send({
//     message: "data has been sent",
//     success: 200
//   })

// })

module.exports = router;