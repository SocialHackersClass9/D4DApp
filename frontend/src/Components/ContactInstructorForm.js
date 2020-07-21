import React from "react"
import './ContactInstructorForm.css';
import { Route, Redirect } from 'react-router'

class MessageBox extends React.Component {
    render() {
        return (
            <div className="contact1">
                <div className="container-contact1">
                    <div className='col-12 col-sm-12 col-xs-12 align-self-center'>
                        <form className="contact1-form validate-form">
                            <div className="wrap-input1 validate-input" data-validate="Message is required">
                                <textarea className="input1" name="message" placeholder="Message" defaultValue={""} />
                                <span className="shadow-input1" />
                            </div>
                            <div className="container-contact1-form-btn">
                                <button className="contact1-form-btn">
                                    <span>
                                        Send Email
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div></div></div>
        );
    }
}
let userIsLoggedIn = false;
class ContactInstructorForm extends React.Component {
    constructor() {
        super();
        this.state = {
            childVisible: false
        }
    }

    render() {
        return (
            <div className="contact1">
                <div className="container-contact1">
                    {/* Need to check user status, if he is logged in then the MessageBox should appear. 
                    If he is not then a login pop-up (same as home page)  */}
                    <div className='col-12 col-sm-12 col-xs-12 text-center'>
                        <button className="contact1-form-title" onClick={() => this.onClick()}>
                            Get in touch
                     </button>
                        {
                            this.state.childVisible
                                ? <MessageBox />
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    }

    onClick() {

        if (userIsLoggedIn === false) {
            alert("In order to contact an instructor, you need to be registered and logged in!");


        }
        else {
            return (this.setState({ childVisible: !this.state.childVisible }));
        }
    }
};

export default ContactInstructorForm

