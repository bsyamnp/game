import React from 'react';

import './Square.css'
const Squire = (props) => {
    return (
        <button className='square' onClick={props.onClick}>{props.value}</button>
    );
}

export default Square;
