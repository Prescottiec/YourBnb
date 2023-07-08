import { UPDATE_BOUNDS } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
  bounds: {}
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_BOUNDS) {
    const newFilter = {
      [action.filter]: action.value,
    };
    return Object.assign({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
