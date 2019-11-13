import React from 'react';
import Home from './components/Home';

//imports
import { Provider } from "react-redux";
import configureStore from "./store/store";

import './App.css';

//setting it up
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
