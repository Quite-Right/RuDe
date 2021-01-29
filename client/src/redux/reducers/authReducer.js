import { LOG_IN, LOG_OUT } from "../actionTypes";

const initialState = {

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        token: action.payload
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        token: "",
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
