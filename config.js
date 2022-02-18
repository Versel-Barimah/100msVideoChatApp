const jwt = require('jsonwebtoken');
const uuid4 = require('uuid4');

const TOKEN_ENDPOINT = process.env.TOKEN_ENDPOINT;
const ROOM_ID = process.env.ROOM_ID;

exports.getToken = async (user_role) => {
    const role = user_role.toLowerCase();
    const user_id = uuid4;
    const room_id = ROOM_ID;
    const response = await fetch(`${TOKEN_ENDPOINT}api/token`, {
        method: 'POST',
        body: JSON.stringify({
            user_id,
            role,
            room_id
        })
    });
    const { token } = await response.json();
    return token;
};



