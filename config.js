

import jwt from 'jsonwebtoken';
import uuid4 from "uuid4";

const ROOM_ID = process.env.ROOM_ID || "620267696f2b876d58ef218c";

var app_access_key = '62025e7571bd215ae0420171';
var app_secret = 'mWzXi-D1gz3XAcFjTaVUX_Ixw72n3cp75CfiVvYx-Nm_BxetDvb1QMD9xOPV2_J-QjQbGI9iMm_lPwnSkgCE-FDk-3P6ykbAMz4oiM1-cc0bQqPEIphHrEcTb90ccj1CDCoChxxACjZveHgEtLNqISY4ksZ54Fn41EcfSezJoiU=';

const config = {
    getToken(user_role) {
        var payload = {
            access_key: app_access_key,
            room_id: ROOM_ID,
            user_id: '62025e7571bd215ae042016f', //customer id
            role: user_role,
            type: 'app',
            version: 2,
            iat: Math.floor(Date.now() / 1000),
            nbf: Math.floor(Date.now() / 1000)
        };

        const token = jwt.sign(
            payload,
            app_secret,
            {
                algorithm: 'HS256',
                expiresIn: '24h',
                jwtid: uuid4()
            },
        );

        return token;
    }
}



export default config;


