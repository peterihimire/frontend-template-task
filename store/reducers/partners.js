import instance from "../../utils/axios";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  partners: [],
  loading: false,
  error: false,
};

const partnersSlice = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PARTNERS:
      return {
        ...state,
        partners: payload,
      };
    case actionTypes.PARTNERS_ERROR:
      return { ...state, error: payload };
    case actionTypes.PARTNERS_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default partnersSlice;

export const getPartners = (onMount) => (onSuccess) => async (onFailure) => {
  onMount();
  try {
    const response = await instance.get("partners");
    onSuccess(response);
  } catch (err) {
    onFailure(true);
  }
};
