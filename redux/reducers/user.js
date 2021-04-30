import { LOGIN } from "../actions/user";

const initialState = {
  id: 0,
  name: "",
  token: "",
  status: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        token: action.payload.token,
        status: action.payload.status,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
