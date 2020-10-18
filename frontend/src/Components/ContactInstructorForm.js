import React from "react"
import './ContactInstructorForm.css';
import AppContext from '../context.js';
import apis from "../apis";

class MessageBox extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        const msg = {
            email: this.props.instructor.email,
            studentEmail: this.props.user.email,
            message: document.getElementById("message").value,

        }
        console.log(msg);

        apis.post("/contact", msg)
            .then((data) => {
                if (data.status === 'success') {
                    alert("Message Sent.");
                    // this.resetForm()
                } else if (data.status === 'fail') {
                    alert("Message failed to send.")
                }
            })
    }
    render() {
        return (
            <div className='col-12 col-sm-12 col-xs-12 align-self-center'>
                <form className="contact1-form validate-form"
                    onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="wrap-input1 validate-input"
                        data-validate="Message is required">
                        <textarea className="input1"
                            name="message"
                            id="message"
                            placeholder="Message"
                            defaultValue={""} required />
                        <span className="shadow-input1" />
                    </div>

                    <div className="container-contact1-form-btn">
                        <button className="contact1-form-btn"
                            type="submit" >
                            <span>
                                Send Email
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

class ContactInstructorForm extends React.Component {
    constructor() {
        super();
        this.state = {
            childVisible: false
        }
    }

    render() {
        return (
            <AppContext.Consumer>
                {context => (
                    <div className="container2">
                        <div className='col-md-6 col-sm-12 col-xs-12 text-center'>
                            <h2 className="contact1-form-title " >
                                Get in touch
                                 </h2>
                            <br></br>
                            {context.user == null &&
                                (
                                    <div>
                                        <br></br>
                                        <strong>
                                            <p>Dear User, remember that in order to contact
                                            an instructor,
                                            you need to be logged in!
                                                    <br></br>
                                            </p>
                                        </strong>
                                    </div>
                                )}
                            {context.user != null &&
                                (
                                    <div>
                                        <MessageBox instructor={this.props.instructor} user={context.user} />
                                    </div>
                                )}
                        </div>
                    </div>)
                }
            </AppContext.Consumer>
        )
    }
}




export default ContactInstructorForm

