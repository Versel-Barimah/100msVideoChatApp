//imports model
const Model = require('../models/100ms.model')

exports.createMeeting = (req, res) => {
    const result = Model.CreateRoom(12);
    res.status(200).json({ message: "all good", data: result });
}

exports.JoinRoom = (req, res) => {
    try {
        const join = Model.JoinRoom(req.body)
        res.status(200).json({
            message: join,
        })
    } catch (e) {
        res.status(500).json({
            error: e.message,
            message: "could not connect"
        })
    }
    // const join = Model.JoinRoom(req.body)

}