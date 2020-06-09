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