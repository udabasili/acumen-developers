import React from 'react'
import logo from '../assets/images/loading-wheel-trans.svg';


export default function Loader(props) {
    console.log(props.isLoading)
    return (
        <React.Fragment>
            {props.isLoading ?
                <img src={logo} className="loader" alt="logo" /> :
                props.children
            }
        </React.Fragment>
    )
}
