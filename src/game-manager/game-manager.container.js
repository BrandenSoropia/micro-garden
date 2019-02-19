import GameManager from "./game-manager.component";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { initializeGame } from "./game-manager.actions";
import { selectPlants } from "./game-manager.selectors";

const withProps = connect(
  createStructuredSelector({
    plants: selectPlants
  }),
  {
    initializeGame
  }
);

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.initializeGame();
  }
});

export default compose(
  withProps,
  withLifecycle
)(GameManager);
