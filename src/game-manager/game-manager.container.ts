import { compose, lifecycle } from "recompose";
import GameManager from "./game-manager.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { initialize } from "./game-manager.actions";

const withState = connect(
  createStructuredSelector({}),
  { initialize }
);

const withLifecycle = lifecycle({
  componentDidMount() {}
});

export default compose(
  withState,
  withLifecycle
)(GameManager);
