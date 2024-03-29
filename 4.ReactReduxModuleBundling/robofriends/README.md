# RoboFirends App
## Create a react app
```

npx create-react-app

```
## Start the App

```

npm start

```

## Install [tachyons](https://www.npmjs.com/package/tachyons) 

```

npm i yachyons

```
import the file in ```index.js```

```jsx
import 'tachyons';
```
## Creating the card component

create a card.jsx file in /src

```jsx
import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div key={id} className='bg-light-green dib br3-l pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="card"/>
            <div>
                <div>{name}</div>
                <div>{email}</div>
            </div>

        </div>
    );
}

export default Card;
```

![](./src/Docs/img/1.png)

## Creating a Card List Component

```jsx
import React from "react";
import Card from "./Card";
import {robots} from "./Robots";

const CardList = () => {
    return (
        <div>
            {
                robots.map(user => <Card key={user.id} id={user.id} name={user.name} email={user.email}/>)
            }
        </div>
    )
}

export default CardList;
```
## Adding Search feild 
```jsx
import React from "react";

const SearchBox = ({searchChange, searchFeild}) => {
    return (
        <div className='pa3'>
            <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' type='serach'
                   placeholder='search robots'/>
        </div>
    )
}

export default SearchBox;
```
convert the App to A Class Component 

add state
```jsx

this.state={
            robots:robots,
            searchFeild:""
        }
```

create new method for onsearchChange
```jsx

    onSearchChange=(event)=>{
        this.setState({
            searchFeild:event.target.value
        })

    }
```

add filter 
```jsx
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

```