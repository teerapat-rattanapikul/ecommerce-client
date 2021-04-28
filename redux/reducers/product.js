import { CURRENTPRODUCT } from "../actions/product";

const initialState = {
  product: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENTPRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
