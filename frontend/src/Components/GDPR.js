import React from 'react';
import { render } from 'react-dom';
import './style.css';
import GDPR from 'react-gdpr-consent';
//import Toggle from './Toggle'

export default class GDPRPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            privacy: true,
        }
        this.linkHanlder = this.linkHanlder.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    linkHanlder(link) {
        window.open(link, '_blank');
    }
    toggleHandler(id, value) {
        console.log(`${id} is now: ${value}`)
        this.setState({
            [id]: value
        })
    }
    render() {
        const config =

        {
            id: 'privacy',
            text: "I ACCEPT THE GDPR POLICY",
            checked: true,
            locked: false,
            link: "/gdpr",
            linkText: "Privacy & policy"
        };

        return (

            <div className="container">

                <p>Privacy consent: {this.state.privacy ? 'checked' : 'unchecked'}</p>
                <GDPR config={config} toggleHandler={this.toggleHandler} linkHanlder={this.linkHanlder} />;

            </div>
        )
    }
};