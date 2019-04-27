import * as actionTypes from "."

export const saveOrder = payload => {
    return {
        type: actionTypes.SAVE_ORDER,
        payload: payload
    }
}

export const sendMessage = payload => {
    return {
        type: actionTypes.SEND_MESSAGE,
        payload: payload
    }
}