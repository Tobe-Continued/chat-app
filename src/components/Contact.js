import React from "react";
import './Contact.css'
import PropTypes from 'prop-types';


function Contact(props) {
    return (
    <div className={'Contact'}>
        <img className={'avatar'} src={props.avatar} alt={'avatar of ' + props.name}/>
        <div className={'information'}>
            <h4 className={'name'}>{props.name}</h4>
            <div className={'status'}>
                <p className={'status-text'}>
                    <div className={props.isOnline ? 'status-online' : 'status-offline'}> </div>
                    {props.isOnline ? props.online : props.offline}
                </p>
            </div>
        </div>
    </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    online: PropTypes.string.isRequired,
    offline: PropTypes.string.isRequired,
};

export default Contact