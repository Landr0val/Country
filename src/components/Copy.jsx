import React from "react";
import Search from './Search';
import CopySVG from '../images/copy.svg';
import '../styles/Copy.css';

const copyToClipboard = (element) => {
    
    navigator.clipboard.writeText(element)
    console.log(element);
}

const Copy = ({element}) => {
    return (
        // <a href="#" onClick={copyToClipboard(element)} >
            <img src={CopySVG} onClick={() => {navigator.clipboard.writeText(element)}} />
        // </a>
    )
}

export default Copy;