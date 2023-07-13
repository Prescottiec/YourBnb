import { connect } from "react-redux";

import { updateFilter } from "../../actions/filter_actions";
import { asArray } from "../../reducers/selectors";
import Search from "./search";

const mapStateToProps = (state) => ({
  posts: asArray(state.entities),
  minAdults: state.ui.filters.minAdults,
  maxAdults: state.ui.filters.maxAdults,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
