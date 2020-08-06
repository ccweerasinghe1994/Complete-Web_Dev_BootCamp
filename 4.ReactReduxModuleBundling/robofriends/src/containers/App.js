import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/errorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFelid: "",
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }
  onSearchChange = (event) => {
    this.setState({
      searchFelid: event.target.value,
    });
  };
  render() {
    const { robots, searchFelid } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchFelid.toLowerCase())
    );
    return !robots.length ? (
      <div className='tc'>
        <h1
          style={{
            fontFamily: "Monoton",
            color: "white",
          }}
        >
          Lording
        </h1>
      </div>
    ) : (
      <div className='tc'>
        <h1
          style={{
            fontFamily: "Monoton",
            color: "white",
          }}
          className='tc'
        >
          Robot Friends
        </h1>   
        <SearchBox
          searchFelid={searchFelid}
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div> 
    );
  }
}

export default App;
