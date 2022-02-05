import * as actionTypes from "../actions/actionTypes";

const localStorageTemplate = () => {
  if (typeof window !== "undefined") {
    JSON.parse(localStorage.getItem("templates")) || [];
  }
};

const initialState = {
  // allTemplates: JSON.parse(localStorage.getItem("templates")) || [],
  allTemplates: localStorageTemplate,
  filteredTemplates: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  console.log(state);
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

    case actionTypes.FILTER_BY_VALUE:
      let value = action.payload.value;
      console.log(value);
      let filteredValues = state.allTemplates.filter((templates) => {
        console.log(templates.name);
        return  templates.name.toLowerCase().includes(value);
      });

      return {
        ...state,
        filteredTemplates: filteredValues,
      };

    default:
      return state;
  }
};

export default reducer;
