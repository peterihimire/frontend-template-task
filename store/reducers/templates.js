import * as actionTypes from "../actions/actionTypes";

// const localStorageTemplate = () => {
//   if (typeof window !== "undefined") {
//     JSON.parse(localStorage.getItem("templates")) || [];
//   }
// };

// const reloadPage = () => {
//   if (typeof window !== "undefined") {
//     window.location.reload(false);
//   }
// };

const initialState = {
  // allTemplates: JSON.parse(localStorage.getItem("templates")) || [],
  // allTemplates: localStorageTemplate,
  allTemplates: [],
  appliedFilters: [],
  filteredTemplates: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_ALL_TEMPLATES:
      return {
        ...state,
        allTemplates: action.payload,
      };

    case actionTypes.LOAD_DATA:
      let allTemplates = state.allTemplates;

      return {
        ...state,
        filteredTemplates: allTemplates,
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
      let copiedState = Object.assign({}, state);
      console.log(state);
      console.log(copiedState);
      // let newState = { ...state };
      let value = action.payload.value;
      console.log(value);
      console.log(action);

      let filteredValues = state.allTemplates.filter((templates) => {
        // console.log(templates.name);
        return templates.name.toLowerCase().includes(value);
      });
      console.log(state.appliedFilters);
     

      let appliedFilters = [action.type];
      console.log(appliedFilters);

      if (value) {
        appliedFilters = addFilterIfNotExists(
          actionTypes.FILTER_BY_VALUE,
          appliedFilters,
        );
        copiedState.filteredTemplates = filteredValues;
      } else {
        appliedFilters = removeFilter(
          actionTypes.FILTER_BY_VALUE,
          appliedFilters,
        );
        if (appliedFilters.length === 0) {
          copiedState.filteredTemplates = copiedState.allTemplates;
        }
      }
      return copiedState;

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
  let index = appliedFilters.indexOf(filter);
  console.log(index);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}
