import React, { Component } from "react";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import RouteComponent from "./src/route/RouteComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouteComponent />
      </Provider>
    );
  }
}

export default App;
