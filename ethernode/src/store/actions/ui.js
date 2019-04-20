import * as actionTypes from './actionTypes';

export const uiModalOpen = payload => {
    return {
      type: actionTypes.UI_MODAL_OPEN,
      payload: payload
    };
  };
  
  export const uiModalClose = payload => {
    return {
      type: actionTypes.UI_MODAL_CLOSE,
      payload: payload
    };
  };
  