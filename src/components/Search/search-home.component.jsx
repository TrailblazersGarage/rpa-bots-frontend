import React from 'react';
import './search-home-form.style.css';

const SearchHome = ({ searchChange }) => {
    return (
        <div>
            <div className="ph3 center">
                <a className="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue">react.js</a>
                <a className="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue">next.js</a>
                <a className="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green">flutter</a>
                <a className="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue">node.js</a>
                <a className="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue">blockchain</a>
                <a className="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue">nft</a>
            </div>
            <div className='pa3'>
                <div className='center'>
                    <div className='form center pa5 br3 shadow-5'>
                        <input
                            className='apps-search f2'
                            type='text'
                            placeholder='Filter by tag  '
                            onChange={searchChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchHome;