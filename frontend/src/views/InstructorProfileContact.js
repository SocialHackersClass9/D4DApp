import React from "react";
import ContactInstructorForm from '../Components/ContactInstructorForm.js';

export default function InstructorProfileContact() {
    const testProfile = {
        "firstName": "John",
        "lastName": "Kalathis",
        "primaryLocation": "Athens",
        "secondaryLocation": "Patra",
        "sports1": "Basketball",
        "sports2": "Tennis",
        "photo": "https://nwestco.com/wp-content/uploads/2016/08/13.jpg"
    };
    return (
        <div className="contact1">
            <div className="container-contact1">
                <div className="image">
                    <div className="circle-1" />
                    <div className="circle-2" />
                    <img src={testProfile.photo} width={300} height={300} alt="Instructor's photo" />
                </div>
                <form className="contact1-form validate-form">
                    <span className="contact1-form-title">
                        Instructor's Profile
            </span>
                    <table className="table table-borderless d-flex justify-content-center">
                        <tbody >
                            <tr>
                                <th scope="row ">{testProfile.firstName} {testProfile.lastName}</th>
                                <th scope="row"></th>
                            </tr>
                            <tr>
                                <th scope="row">{testProfile.primaryLocation}, {testProfile.secondaryLocation}</th>
                            </tr>
                            <tr>
                                <th scope="row">{testProfile.sports1},{testProfile.sports2}</th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            <div>    <ContactInstructorForm /> </div>
        </div>
    );
}

