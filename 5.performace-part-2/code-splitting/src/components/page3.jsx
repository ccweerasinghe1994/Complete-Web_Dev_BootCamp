import React from "react";
import logo from '../logo.svg';

export const Page3 = ({onRouteChange})=>{
    return(
        <div className='App'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <button className='btn' onClick={()=>onRouteChange('page1')}>page1</button>
            <button className='btn' onClick={()=>onRouteChange('page2')}>page2</button>
            <button className='btn disabled'>page3</button>

        </div>
    )
}