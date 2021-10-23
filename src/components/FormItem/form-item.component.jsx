import React, { useState } from 'react';
import './form-item.style.css';

import PropertyBarContainer from "../../containers/PropertyBarContainer";
import Checkout from "../Checkout/checkout.component";

const FormItem = props => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const updateDisplayMenu = bool => {
        if (displayMenu !== bool) {
            setDisplayMenu(bool);
        }
    };

    let liClass = 'form_item__component list-group-item form-control';
    liClass = props.item.completed ? liClass + ' form_item__component-completed' : liClass;

    return (
        <li
        data-testid="form-item-listitem"
        className={liClass}
        onMouseOver={() => updateDisplayMenu(true)}
        onMouseLeave={() => updateDisplayMenu(false)}>
            <div
                className="text-truncate"
                data-testid="form-item-item-completion"
                onClick={() => props.handleItemCompletion(props.item)}>
                <div className="form_item__checkout d-inline-block">
                    <Checkout isCompleted={props.item.completed} />
                    <span className="form_item__text">{props.item.task}</span>
                </div>
            </div>
            { displayMenu ? <PropertyBarContainer id={props.item._id} /> : null }
        </li>
    );
};

export default FormItem;