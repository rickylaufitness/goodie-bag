import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import rootReducer from "./reducers";
import loggingMiddleware from "redux-logger"; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from "redux-thunk"; // https://github.com/gaearon/redux-thunk

const GET_CANDIES = "GET_CANDIES";

export const getCandies = candies => ({
  type: GET_CANDIES,
  candies
});

export const getAllCandiesThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("api/candies");
      dispatch(getCandies(data));
    } catch (err) {
      console.log("ERROR RETRIEVING CANDIES", err);
    }
  };
};

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      // `withExtraArgument` gives us access to axios in our async action creators!
      // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
