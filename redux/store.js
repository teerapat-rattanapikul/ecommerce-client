import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { createWrapper } from "next-redux-wrapper";

const store = () => createStore(rootReducer);

export const wrapper = createWrapper(store);
