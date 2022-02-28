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

exports.arrayStack = (req, res) => {
    // palidrom
    //get an array stackl
    //push, pop, peek
    var stack = [];
    var word = racecar
    var rword = ""
    //reverse word

    for (var i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }

    for (var i = 0; i < word.length; i++) {
        rword += stack.pop()
    }

    if (stack === rword) {
        res.send({
            word: "word is a palendrom"
        })
    } else {
        res.send({
            word: "word is not a palendrom"
        })
    }

    //compare and give result
}