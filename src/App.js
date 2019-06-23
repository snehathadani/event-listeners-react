import React, { Component } from "react";
import "./App.css";
import { people } from "./People";
import Person from "./Friends/Person";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      persons: []
    };
  }
  componentDidMount() {
    console.log("CDM invoked!");
    this.setState({ persons: people });
  }
  showMenuHandler= (event)=> {
    event.preventDefault();
    this.setState({showMenu:true,
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        {this.state.persons.map(person =>
          <Person person={person} />
        )}
      </div>
    );
  }
}

export default App;
