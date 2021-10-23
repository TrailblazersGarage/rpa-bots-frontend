import React from 'react';

export default({ input, label, meta: { error, touched }, children }) => {
  return (
      <div>
        <label>{label}</label>
        <div>
          <select {...input}>
            {children}
          </select>
          <div className="red ma3">
            { touched && error }
          </div>
        </div>
      </div>
  );
};