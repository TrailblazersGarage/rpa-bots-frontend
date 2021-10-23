import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './property-bar.style.css';

const PropertyBar = props => (
    <div className="property_bar__component">
        <button
            data-testid="property-bar-delete-button"
            className="btn btn-danger property_bar__button"
            onClick={() => props.handleDeleteItem(props.id)}>
            <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
    </div>
);

export default PropertyBar;