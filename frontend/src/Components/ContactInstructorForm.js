import React from "react"
import './ContactInstructorForm.css';


export default function ContactInstructorForm() {
    return (
        <div className="contact1">
            <div className="container-contact1">

                <form className="contact1-form validate-form">
                    <button className="contact1-form-title">
                        Get in touch
            </button>

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
            </div>
        </div>

    );
}

