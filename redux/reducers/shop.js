import { ADDSHOP } from "../actions/shop";

const initialState = {
  detail: {},
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDSHOP:
      return {
        ...state,
        detail: {
          ...state.detail,
          [action.payload.shopId]: {
            id: action.payload.shopId,
            shopName: action.payload.shop.name,
            role: action.payload.role,
          },
        },
      };

    default:
      return {
        ...state,
      };
  }
};

export default shopReducer;
