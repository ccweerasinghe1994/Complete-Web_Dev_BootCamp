import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
import ErrorBoundary from "../components/errorBoundary";

import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../redux/actions.js'


class App extends Component {


    componentDidMount() {
        this.props.onRequestRobots()
    }


    render() {

        const {searchFelid, onSearchChange, robots, isPending, error} = this.props;
        const filteredRobots = robots.filter((robot) =>
            robot.name.toLowerCase().includes(searchFelid.toLowerCase())
        );
        return isPending ? (
            <div className='tc'>
                <h1 style={{fontFamily: "Monoton", color: "white",}}>
                    Lording
                </h1>
            </div>
        ) : (
            <div className='tc'>
                <h1 style={{fontFamily: "Monoton", color: "white",}} className='tc'>
                    Robot Friends
                </h1>
                <SearchBox
                    searchFelid={searchFelid}
                    searchChange={onSearchChange}
                />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    searchFelid: state.searchFieldReducer.searchFelid,
    robots: state.robotsReducer.robots,
    isPending: state.robotsReducer.isPending,
    error: state.robotsReducer.error,
})
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
