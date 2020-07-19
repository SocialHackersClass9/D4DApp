import React, { useState, useEffect } from "react";
import ContactInstructorForm from '../Components/ContactInstructorForm.js';
import { useParams } from "react-router-dom";

export default function InstructorProfileContact(props) {
    const [instructor, setInstructor] = useState([]);
    let { id } = useParams();
    const url = process.env.REACT_APP_API_URL + '/instructor/' + id;

    console.log(id);
    const styledDetails = {
        margin: "10px 30px",
        padding: "10px 30px",
        fontSize: "1.5em",
        color: "black",
        textAlign: "justify"

    };
    useEffect(() => {
        fetch(url,{
            headers : {
                "key" : "123"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructor(data[0]);
            });
    }, [])


    return (
        <div className="container">
            <div className="row row-header align-self-center">
                <div className="col-12 col-sm-12 col-xs-12 text-center">
                    <h1 className="text-center"> Instructor Profile</h1>
                </div>
            </div>
            <div className="row align-self-center">
                <div className="col-md-6">
                    <div className="image">
                        <img src={"https://100dayscss.com/codepen/jessica-potter.jpg"}
                            width={300} height={300} alt="Instructor"
                            className="rounded mx-auto d-block" />
                    </div>
                </div>
                <div className="col-md-6 text-center align-self-center">
                    <table className="table table-borderless d-flex justify-content-center">
                        <tbody style={styledDetails}>
                            <tr>
                                <td align="middle">
                                    {instructor.first_name} {instructor.last_name}
                                </td>
                            </tr>
                            <tr>
                                <td align="middle">
                                    <strong>Sports: </strong>{instructor.sports && instructor.sports.map(sports => { return <div>{sports.name}</div> })}
                                </td>
                            </tr>
                            <tr>
                                <td align="middle">
                                    <div><strong>Locations: </strong></div>  {instructor.locations && instructor.locations.map(locations => { return <div>{locations.name}</div> })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div><p style={styledDetails}>
                {instructor.details}</p></div>

            < div > <ContactInstructorForm /> </div>
        </div >
    );
}

