import React from "react";
import { Provider } from "react-redux";
import Home from "./components/Home";
import configureStore from "./store/store";
import "./App.css";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
