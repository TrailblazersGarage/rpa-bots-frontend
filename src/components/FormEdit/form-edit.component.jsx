import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './form-edit.style.css';

const FormEdit = props => {
    const [itemValue, setItemValue] = useState(props.item.task);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => {
          window.removeEventListener('keyup', handleKeyUp);
        };
    });

    const handleKeyUp = ev => {
        if (ev.code === 'Escape') {
            props.handleCancelEditItem(ev);
        }
    };

    const handleItemChange = ev => setItemValue(ev.target.value);

    const handleEditAndResetForm = ev => {

        //ev.preventDetault();

        props.handleEditItem({
            ...props.items,
            value: itemValue,
        });

        setItemValue('');
    }

    return (
        <li className="form_edit__component list-group-item">
            <form method="POST" onSubmit={handleEditAndResetForm}>
                <div className="form-row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="input-edit-todo-item"
                            name="edit-todo-item"
                            value={itemValue}
                            onChange={handleItemChange}
                            autoFocus
                        />
                    </div>

                    <div className="col-auto">
                        <button
                            data-testid="form-edit-submit-button"
                            type="submit"
                            id="submit-edit-todo-item"
                            className="inline-flex items-center pa3 ba border-box"
                            disabled={!itemValue}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button
                            data-testid="form-edit-cancel-edit-button"
                            id="cancel-edit-todo-item"
                            type="button"
                            className="btn btn-danger"
                            onClick={props.handleCancelEditItem}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            </form>
        </li>
    );
};

export default FormEdit;