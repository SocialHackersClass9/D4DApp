import React, { useReducer } from "react"
import ContactInstructorForm from './ContactInstructorForm.js';

export default function InstructorProfileContact() {
    const testProfile = {
        "firstName": "John",
        "lastName": "Kalathis",
        "location": "Athens",
        "sports": "Basketball",
        "image": "https://nwestco.com/wp-content/uploads/2016/08/13.jpg"
    }
    return (
        <div className="contact1">
            <div className="container-contact1">
                <div className="image">
                    <div className="circle-1" />
                    <div className="circle-2" />
                    <img src={testProfile.image} width={300} height={300} alt="Jessica Potter" />
                </div>
                <form className="contact1-form validate-form">
                    <span className="contact1-form-title">
                        Instructor's Profile
            </span>
                    <table className="table table-borderless d-flex justify-content-center">
                        <tbody>
                            <tr>
                                <th scope="row ">{testProfile.firstName}</th>
                            </tr>
                            <tr>
                                <th scope="row">{testProfile.lastName}</th>
                            </tr>
                            <tr>
                                <th scope="row">{testProfile.location}</th>
                            </tr>
                            <tr>
                                <th scope="row">{testProfile.sports}</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            <div>    <ContactInstructorForm /> </div>
        </div>
    );
}

