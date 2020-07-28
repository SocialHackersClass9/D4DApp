import React, { Component } from 'react';
import "./Instructors_registration.css";

export class Success extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { email,user_name,password,first_name ,last_name ,year_of_birth ,phone , education , gender ,street ,street_number,zip ,region_id ,occupation ,details ,photo ,sports_name , locations_name }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">You have been registred success fully</h1>
                <ul>
                    <li><span className="success"><b> Name</b></span> : {first_name}</li>
                    <li><span className="success"><b> Last Name</b></span> : {last_name}</li>
                    <li><span className="success"><b> Username</b></span> : {user_name}</li>
                    <li><span className="success"><b> Email</b></span> : {email}</li>
                    <li><span className="success"><b> Password</b></span> : {password}</li>
                    <li><span className="success"><b> Phone Number</b></span> : {phone} </li>
                    <li><span className="success"><b> Education</b></span> : {education} </li>
                    <li><span className="success"><b> Year of birth</b></span> : {year_of_birth} </li>
                    <li><span className="success"><b> Sports</b></span> : {sports_name.toString()} </li>
                    <li><span className="success"><b> Locations</b></span> : {locations_name.toString()} </li>
                    <li><span className="success"><b> Education</b></span> : {education} </li>
                    <li><span className="success"><b> Gender</b></span> : {gender}</li>
                    <li><span className="success"><b> Street</b></span> : {street}</li>
                    <li><span className="success"><b> Street Number</b></span> : {street_number}</li>
                    <li><span className="success"><b> Zip</b></span> : {zip}</li>
                    <li><span className="success"><b> Region id</b></span> : {region_id}</li>
                    <li><span className="success"><b> Occupation</b></span> : {occupation}</li>
                    <li><span className="success"><b> Details</b></span> : {details}</li>
                    <li><span className="success"><b> Photo</b></span> : {photo} <img width="50" src={`/backend/Coach_Profile_images/${photo}`} alt='profile photo'></img> </li>
                </ul>
            </div>
        )
    }
}

export default Success;