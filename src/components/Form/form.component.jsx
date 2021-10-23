import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import './form-add.style.css';

const Form = ({ handleAddItem, module }) => {
    const [itemValue, setItemValue] = useState('');

    const handleSubmitAndResetForm = ev => {
        ev.preventDefault();

        handleAddItem(itemValue, module);

        // Reset Value
        setItemValue('');
    };

    const handleItemChange = ev => setItemValue(ev.target.value);

    return (
        <div>
            <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
                <div className="form-row">
                    <div className="col">
                        <input
                            type="text"
                            className="pa2 input-reset ba bg-transparent w-100 measure"
                            id="new-task-item"
                            maxLength="200"
                            name="new-task-item"
                            placeholder="Write here..."
                            aria-label="Task description"
                            value={itemValue}
                            onChange={handleItemChange}
                            autoFocus
                        />
                        <button
                            type="submit"
                            data-testid="form-submit"
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                            disabled={!itemValue}
                            aria-label="Add task item">
                            <FontAwesomeIcon icon={faPlus} />
                            Add
                        </button>
                    </div>
                    <div className="col-auto">
                        <p className="tr fs-normal">Put the most important on the top <FontAwesomeIcon icon={faArrowsAlt} /></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;