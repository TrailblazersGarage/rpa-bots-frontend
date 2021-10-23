import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{ label}</label>
            <input {...input} />
            <div className="red ma3">
                { touched && error }
            </div>
        </div>
    );
};