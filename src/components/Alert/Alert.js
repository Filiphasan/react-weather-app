import React from 'react'
import capitalize from '../Helper';
import './Alert.css'

const Alert = ({ type, message, icon, visible }) => {

    if (visible) {
        return (
            <div className="container">
                <div className={`alert alert-${type}`} >
                    <i className={`${icon} alert-icon`}></i>
                    <p className="alert-text">{capitalize(type)} | {message}</p>
                </div>
            </div>)
    } else {
        return null;
    }
}

export default Alert
