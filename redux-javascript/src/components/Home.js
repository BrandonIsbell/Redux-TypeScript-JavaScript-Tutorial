import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchJoke } from "../store/actions";

const Home = props => {
  return (
    <div className="App">
      <button onClick={() => props.fetchJoke()}>GetJoke</button>
      {props.jokes.map((joke, key) => (
        <p key={key}>{joke.value.joke}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jokes: state.jokes.jokes
  };
};

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ fetchJoke: fetchJoke }, dispatch)
)(Home);
