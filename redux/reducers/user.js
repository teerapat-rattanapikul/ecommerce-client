import { LOGIN } from "../actions/user";

const initialState = {
  id: 0,
  status: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id: action.payload.id,
        status: action.payload.status,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
