import React from "react";
import './Contact.css'


function Contact(avatar, name, isOnline) {

    avatar = "https://randomuser.me/api/portraits/men/43.jpg";
    name = 'Rafael Watson';
    isOnline = true;

    return (
    <div className={'Contact'}>
        <img className={'avatar'} src={avatar} alt={'avatar of ' + name}/>
        <div className={'information'}>
            <h4 className={'name'}>{name}</h4>
            <div className={'status'}>
                <p className={'status-text'}>
                    <div className={isOnline ? 'status-online' : 'status-offline'}> </div>
                    {isOnline ? 'online' : 'offline'}
                </p>
            </div>
        </div>
    </div>
    );
}

export default Contact