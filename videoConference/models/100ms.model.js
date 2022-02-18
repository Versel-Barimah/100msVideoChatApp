// import { HMSReactiveStore } from '@100mslive/hms-video-store';

const HMSReactiveStore = require('@100mslive/hms-video-store');
const hms = HMSReactiveStore();
const hmsStore = hms.getStore;
const hmsActions = hms.getHMSActions;

// import config
const config = require('../../config');


exports.CreateRoom = (id) => {
    return id;
}

exports.JoinRoom = (UserRequest) => {

    const result = hmsActions.join({
        userName: UserRequest.userName,
        authToken: config.getToken(UserRequest.userRole)
    });
    return result;
}

exports.LeaveRoom = () => {

}

exports.MuteTrack = () => {

}