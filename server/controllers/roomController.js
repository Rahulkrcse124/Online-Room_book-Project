const roomController = async (req, res) => {
  try {
    const rooms = await Room.find({})
    res.send(rooms);
  } catch (error) {
    return res.status(400).json({ message: error })
  }

}

module.exports = roomController