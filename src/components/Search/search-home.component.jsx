import React from 'react';
import './search-home-form.style.css';

const SearchHome = ({ searchChange }) => {
    return (
        <div className='pa3'>
            <div className='center'>
                <div className='form center pa5 br3 shadow-5'>
                    <input
                        className='apps-search f2'
                        type='text'
                        placeholder='Search apps and bots'
                        onChange={searchChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchHome;