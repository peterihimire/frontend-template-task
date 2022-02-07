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

export const loadData = () => {
  return {
    type: actionTypes.LOAD_DATA,
  };
};

export const filterByValue = (payload) => {
  return {
    type: actionTypes.FILTER_BY_VALUE,
    payload,
  };
};

export const sortByAlphabet = (payload) => {
  return {
    type: actionTypes.SORT_BY_ALPHABET,
    payload,
  };
};

export const sortByHealth = (payload) => {
  return {
    type: actionTypes.SORT_BY_HEALTH,
    payload,
  };
};

export const sortByEducation = (payload) => {
  return {
    type: actionTypes.SORT_BY_EDUCATION,
    payload,
  };
};

export const sortByEcommerce = (payload) => {
  return {
    type: actionTypes.SORT_BY_ECOMMERCE,
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
