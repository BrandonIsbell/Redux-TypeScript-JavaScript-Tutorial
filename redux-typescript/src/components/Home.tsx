import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchJoke } from "../store/actions";

//Notice these imports and PropTypes
import { State } from "../store/store";
import { Joke } from "../store/myTypes";

interface HomeProps {
  jokes: Joke[];
  fetchJoke: typeof fetchJoke;
}

//There are only slight differences to declaring the component 
//and mapStateToProps
const Home: React.FC<HomeProps> = props => {
  return (
    <div className="App">
        <button onClick={() => props.fetchJoke()}>GetJoke</button>
        {props.jokes.map((joke, key) => (
          <p key={key}>{joke.value.joke}</p>
        ))}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    jokes: state.jokes.jokes
  };
};

export default connect(mapStateToProps, dispatch =>
  bindActionCreators({ fetchJoke: fetchJoke }, dispatch)
)(Home);
