import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  //fetch returns a promise
  //response.json() method returns a promise too
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //other methods
  //prefer arrow function to get the correct context of this (otherwise we might need to bind every function to this keyword in the constructor)
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //setState is asynchronous (the second parameter, the callback function, is running only after setState is finished)
  //don't run directly setState in render, because you'll end up in a loop
  render() {
    const { monsters, searchField } = this.state;
    //instead of
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    //we filter the monster array to get some results
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //every time component state changes the render method is running again
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
