import * as actionTypes from "./actionTypes";

import axios from "../../utils/axios";

export const templateStart = (payload) => {
  return {
    type: actionTypes.TEMPLATE_START,
    payload,
  };
};

export const templateError = (payload) => {
  return {
    type: actionTypes.TEMPLATE_ERROR,
    payload,
  };
};

export const getAllTemplates = (payload) => {
  return {
    type: actionTypes.GET_ALL_TEMPLATES,
    payload,
  };
};

// Get all templates

export const templates = () => {
  return async (dispatch) => {
    dispatch(templateStart(true));

    try {
      const response = await axios.get(`task_templates`);
      console.log(response);
      console.log(response.data.slice(1, 200));
      dispatch(getAllTemplates(response.data.slice(0, 200)));
    } catch (err) {
      console.log(err);
      dispatch(templateError(err));
    } finally {
      dispatch(templateStart(false));
    }
  };
};
