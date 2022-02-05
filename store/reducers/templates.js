import * as actionTypes from "../actions/actionTypes";

const localStorageTemplate = () => {
  if (typeof window !== "undefined") {
    JSON.parse(localStorage.getItem("templates")) || [];
  }
};

const initialState = {
  // allTemplates: JSON.parse(localStorage.getItem("templates")) || [],
  allTemplates: localStorageTemplate,
  appliedTemplates: [],
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
      // let newState = Object.assign({}, state);

      let newState = { ...state };
      let value = action.payload.value;
      console.log(value);
      let filteredValues = state.allTemplates.filter((templates) => {
        console.log(templates.name);
        return templates.name.toLowerCase().includes(value);
      });
      // console.log(filteredValues);
      let appliedTemplates = state.appliedTemplates;

      if (value) {
        appliedTemplates = addFilterIfNotExists(
          actionTypes.FILTER_BY_VALUE,
          appliedTemplates,
        );
        newState.filteredTemplates = filteredValues;
      } else {
        appliedTemplates = removeFilter(
          actionTypes.FILTER_BY_VALUE,
          appliedTemplates,
        );
        if (appliedTemplates.length === 0) {
          newState.filteredTemplates = newState.allTemplates;
        }
      }

      return {
        newState,
        // allTemplates: filteredValues,
      };

    default:
      return state;
  }
};

export default reducer;

function addFilterIfNotExists(filter, appliedFilters) {
  console.log(filter);
  console.log(appliedFilters);
  let index = appliedFilters.indexOf(filter);
  console.log(index);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  console.log(filter);
  console.log(appliedFilters);
  let index = appliedFilters.indexOf(filter);
  console.log(index);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}
