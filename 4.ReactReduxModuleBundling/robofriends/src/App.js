import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from './Robots'
class App extends Component  {
    constructor() {
        super();
        this.state={
            robots:robots,
            searchFeild:""
        }
    }
    onSearchChange=(event)=>{
        this.setState({
            searchFeild:event.target.value
        })

    }
    render() {
        const filterdRobots = this.state.robots.filter(robot=>robot.name.toLowerCase().includes(
            this.state.searchFeild.toLowerCase()
        ))
        return (
            <div className='tc' >
                <h1 className='tc'>Robo Friends</h1>
                <SearchBox searchFeild={this.state.searchFeild} searchChange={this.onSearchChange}/>
                <CardList robots={filterdRobots}/>
            </div>
        )
    }



}

export default App;