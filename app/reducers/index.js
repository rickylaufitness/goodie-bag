import axios from "axios";

const GET_CANDIES = "GET_CANDIES";

export const getCandies = candies => ({
  type: GET_CANDIES,
  candies
});

const initialState = {
  candies: []
};

export const getAllCandiesThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/candies");
      dispatch(getCandies(data));
    } catch (err) {
      console.log("ERROR RETRIEVING CANDIES", err);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
