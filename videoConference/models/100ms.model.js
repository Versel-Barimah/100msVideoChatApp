
import pkg from '@100mslive/hms-video-store';
const { HMSReactiveStore } = pkg;

const hms = new HMSReactiveStore();
const hmsStore = hms.getStore();
const hmsActions = hms.getHMSActions();


import config from '../../config.js'

const Model = {
    CreateRoom: (id) => {
        return id;
    },

    JoinRoom: (UserRequest) => {

        const result = hmsActions.join({
            userName: UserRequest.userName,
            authToken: config.getToken(UserRequest.userRole),
            settings: {
                isAudioMuted: true
            }
        });
        return result;
    }

    // exports.LeaveRoom:() => {

    // }

    // exports.MuteTrack:() => {

    // }
}

export default Model;