import Model from '../models/100ms.model.js'

const VideoController = {

    // testing the controller
    createMeeting: (req, res) => {
        const result = Model.CreateRoom(12);
        res.status(200).json({ message: "all good", data: result });
    },

    JoinRoom: (req, res) => {

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

    }
}

export default VideoController;