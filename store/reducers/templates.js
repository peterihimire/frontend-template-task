import * as actionTypes from "../actions/actionTypes";

const localSto = () => {
  if (typeof window !== "undefined") {
    JSON.parse(localStorage.getItem("templates")) || null;
  }
};

const initialState = {
  // allTemplates: JSON.parse(localStorage.getItem("templates")) || null,
  allTemplates: localSto,

  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TEMPLATES:
      return {
        ...state,
        allTemplates: action.payload,
      };
    case actionTypes.TEMPLATE_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.TEMPLATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
