import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <div className="App">
        <Header handleInputChange={this.handleInputChange} search = {this.state.search}/>

        <Main search = {this.state.search} />
      </div>
    );
  }
}

export default App;
