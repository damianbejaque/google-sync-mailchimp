import React from "react";

import './Card.scss'
import Dropdown from "./Dropdown";


const Card = (props) => {
    const { explainText, application, logo, contacts } = props
    return (
        <div className="card">
            <div className="card-logo">
                <img src={logo} className="card-image" alt="logo" />
            </div>
            <h3>{application}</h3>
            <p> {explainText} </p>
            <Dropdown contacts={contacts} />
        </div>
    )

}

export default Card;