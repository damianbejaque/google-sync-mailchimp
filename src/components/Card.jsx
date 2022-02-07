import React from "react";

import './Card.scss'
import DropdownMenu from "./DropdownMenu";


const Card = (props) => {
    const { explainText, application, logo, contacts } = props
    return (
        <div className="card">
            <div className="card-logo">
                <img src={logo} className="card-image" alt="logo" />
            </div>
            <h3>{application}</h3>
            <p> {explainText} </p>
            <DropdownMenu contacts={contacts} />
        </div>
    )

}

export default Card;