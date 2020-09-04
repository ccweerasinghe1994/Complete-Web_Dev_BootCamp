import React, {Component} from 'react';
import './App.css';
import Page1 from "./components/page1";


class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            route: 'page1',
            component: ''
        }
    }

    onRouteChange = (route) => {
        if (route === 'page1') {
            this.setState({route})
        }else if(route === 'page2'){
            import('./components/page2').then((page2)=>{
                console.log(page2)
                this.setState({
                    route:route,
                    component:page2.default
                })
            })
        }
        else if(route === 'page3'){
            import('./components/page3').then((page3)=>{
                this.setState({
                    route:route,
                    component:page3.default
                })
            })
        }
    }

    render() {

        if (this.state.route === 'page1') {
            return <Page1 onRouteChange={this.onRouteChange}/>
        } else {
            return <this.state.component onRouteChange={this.onRouteChange}/>
        }
    }


}

export default App;
