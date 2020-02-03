import React from 'react';
import './style.css';


const Backdrop = props =>(
    <div className="backdrop" onClick={props.click}/>
);

export default Backdrop;
