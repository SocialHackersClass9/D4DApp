import React, { useState, useEffect } from "react";
import ContactInstructorForm from '../Components/ContactInstructorForm.js';

export default function InstructorProfileContact() {
    const [instructor, setInstructor] = useState([]);
    const url = process.env.REACT_APP_API_URL + '/instructor';

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructor(data);
            });
    }, [])


    return (
        <div className="contact1">
            <div className="container-contact1">
                <div className="image">
                    <div className="circle-1" />
                    <div className="circle-2" />
                    <img src={"https://100dayscss.com/codepen/jessica-potter.jpg"} width={300} height={300} alt="Instructor's photo" />
                </div>
                <form className="contact1-form validate-form">
                    <span className="contact1-form-title">
                        Instructor's Profile
            </span>
                    <table className="table table-borderless d-flex justify-content-center">
                        <tbody >
                            <tr scope="row ">{instructor.first_name} {instructor.last_name}

                            </tr>
                            <tr>
                                <th scope="row"></th>
                            </tr>
                            <tr>
                                <th scope="row"></th>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

            <div>    <ContactInstructorForm /> </div>
        </div>
    );
}

