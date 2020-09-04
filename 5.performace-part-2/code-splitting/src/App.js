import React, {Component} from 'react';
import './App.css';
import Page1 from "./components/page1";
import asyncComponent from "./components/AsyncComponent";


class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            route: 'page1',
            component: null
        }
    }

    onRouteChange = (route) => {
        this.setState({
            route:route
        })

    }

    render() {

        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange}/>
        } else if (this.state.route === 'page2') {
            const AsyncPage2 = asyncComponent(() => import('./components/page2'))
            return <AsyncPage2 onRouteChange={this.onRouteChange}/>
        } else if (this.state.route === 'page3') {
            const AsyncPage3 = asyncComponent(() => import('./components/page3'))
            return <AsyncPage3 onRouteChange={this.onRouteChange}/>
        }
    }


}

export default App;
