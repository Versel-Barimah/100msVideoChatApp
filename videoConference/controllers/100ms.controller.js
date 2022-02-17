//imports model
const Model = require('../models/100ms.model')

exports.createMeeting = (req, res) => {
    const result = Model.CreateRoom(12);
    res.status(200).json({ message: "all good", data: result });
}