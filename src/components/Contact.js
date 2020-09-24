import React from "react";
import './Contact.css'
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.isOnline
        }
    }
    render() {
        return (
            <div className={'Contact'}>
                <img className={'avatar'} src={this.props.avatar} alt={'avatar of ' + this.props.name}/>
                <div className={'information'}>
                    <h4 className={'name'}>{this.props.name}</h4>
                    <div className={'status'}>
                        <p className={'status-text'} onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline });
                        }}>
                            <div className={this.state.online ? 'status-online' : 'status-offline'}> </div>
                            {this.state.online ? this.props.online : this.props.offline}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    online: PropTypes.string.isRequired,
    offline: PropTypes.string.isRequired,
};

export default Contact