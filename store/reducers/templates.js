import { templates } from "../actions";
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

    case actionTypes.SORT_BY_EDUCATION:
      const newState = { ...state };

      let sortedEdu = state.allTemplates.filter((templates) => {
        console.log(templates.category.includes("Education"));
        return templates.category.includes("Education");
      });
      newState.filteredTemplates = sortedEdu;

      newState.appliedFilters = addFilterIfNotExists(
        actionTypes.SORT_BY_EDUCATION,
        [action.payload],
      );

      newState.appliedFilters = removeFilter(actionTypes.SORT_BY_EDUCATION, [
        action.payload,
      ]);

      return newState;

    case actionTypes.SORT_BY_HEALTH:
      const healthState = { ...state };

      let sortedHealth = state.allTemplates.filter((templates) => {
        console.log(templates.category.includes("Health"));
        return templates.category.includes("Health");
      });
      healthState.filteredTemplates = sortedHealth;

      healthState.appliedFilters = addFilterIfNotExists(
        actionTypes.SORT_BY_HEALTH,
        [action.payload],
      );

      healthState.appliedFilters = removeFilter(actionTypes.SORT_BY_HEALTH, [
        action.payload,
      ]);

      return healthState;

    case actionTypes.SORT_BY_ECOMMERCE:
      const ecommerceState = { ...state };

      // let val = action.payload.value;
      // console.log(val);
      // console.log(action);

      let sortedEcommerce = state.allTemplates.filter((templates) => {
        console.log(templates.category.includes("E-commerce"));
        return templates.category.includes("E-commerce");
      });
      ecommerceState.filteredTemplates = sortedEcommerce;

      ecommerceState.appliedFilters = addFilterIfNotExists(
        actionTypes.SORT_BY_ECOMMERCE,
        [action.payload],
      );

      ecommerceState.appliedFilters = removeFilter(
        actionTypes.SORT_BY_ECOMMERCE,
        [action.payload],
      );

      return ecommerceState;

    case actionTypes.SORT_BY_ALPHABET:
      const alphabetState = { ...state };

      let sortedAlphabetArr =
        action.payload.direction === "asc"
          ? sortAsc(state.filteredTemplates, "name")
          : sortDesc(state.filteredTemplates, "name");

      alphabetState.filteredProducts = sortedAlphabetArr;
      
      alphabetState.appliedFilters = addFilterIfNotExists(
        actionTypes.SORT_BY_ALPHABET,
        [action.payload],
      );
      alphabetState.appliedFilters = removeFilter(
        actionTypes.SORT_BY_ALPHABET,
        [action.payload],
      );

      return alphabetState;

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

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}
