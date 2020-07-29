import React from "react"
import './ContactInstructorForm.css';
import AppContext from '../context.js';
import apis from "../apis";


class MessageBox extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        apis.post("/contact", (req, res) => {
            const msg = {
                to: "nyx5437@gmail.com",
                from: req.body.email,
                subject: req.body.subject,
                text: req.body.message,
            }
        })
            .then((response) => {
                if (response.data.msg === 'success') {
                    alert("Message Sent.");
                    this.resetForm()
                } else if (response.data.msg === 'fail') {
                    alert("Message failed to send.")
                }
            })
    }
    render() {
        return (
            <div className="contact1">
                <div className="container-contact1">
                    <div className='col-12 col-sm-12 col-xs-12 align-self-center'>
                        <form className="contact1-form validate-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="wrap-input1 validate-input" data-validate="Message is required">
                                <textarea className="input1" name="message" placeholder="Message" defaultValue={""} required />
                                <span className="shadow-input1" />
                            </div>
                            <div className="container-contact1-form-btn">
                                <button className="contact1-form-btn" type="submit" >
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
const styledDetails = {
    margin: "10px 30px",
    padding: "10px 30px",
    fontSize: "1.5em",
    color: "black",
    textAlign: "center"

};
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
                    <div className="contact1">
                        <div className="container-contact1">
                            <div className='col-12 col-sm-12 col-xs-12 text-center'>
                                <h2 className="contact1-form-title" >
                                    Get in touch
                                 </h2>


                                {context.user == null &&
                                    (
                                        <div style={styledDetails}>
                                            <br></br><strong><p>Dear User, remember that in order to contact an instructor,
                                            you need to be logged in!<br></br> </p></strong></div>
                                    )
                                }
                                {context.user != null &&
                                    (
                                        <div>
                                            <MessageBox />
                                        </div>)}

                            </div>
                        </div>
                    </div>
                )
                }
            </AppContext.Consumer>
        )
    }
}




export default ContactInstructorForm

