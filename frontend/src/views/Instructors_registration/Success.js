import React, { Component } from 'react';
import "./App.css";

export class Success extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { email,user_name,password,first_name ,last_name ,year_of_birth ,phone, sport , education , gender ,street ,street_number,zip ,region_id ,occupation ,details , location ,photo }
        } = this.props;
        const style ={
            color : 'red'
        }
        return (
            <div className="form-container">
                <h1 className="mb-5">You have been registred success fully</h1>
                <ul class="list-group">
                    <li class="list-group-item"><span style={style}><b> Name</b></span> : {first_name}</li>
                    <li class="list-group-item"><span style={style}><b> Last Name</b></span> : {last_name}</li>
                    <li class="list-group-item"><span style={style}><b> Username</b></span> : {user_name}</li>
                    <li class="list-group-item"><span style={style}><b> Email</b></span> : {email}</li>
                    <li class="list-group-item"><span style={style}><b> Password</b></span> : {password}</li>
                    <li class="list-group-item"><span style={style}><b> Phone Number</b></span> : {phone} </li>
                    <li class="list-group-item"><span style={style}><b> Education</b></span> : {education} </li>
                    <li class="list-group-item"><span style={style}><b> Year of birth</b></span> : {year_of_birth} </li>
                    <li class="list-group-item"><span style={style}><b> Sports</b></span> : {sport.toString()} </li>
                    <li class="list-group-item"><span style={style}><b> Locations</b></span> : {location.toString()} </li>
                    <li class="list-group-item"><span style={style}><b> Education</b></span> : {education} </li>
                    <li class="list-group-item"><span style={style}><b> Gender</b></span> : {gender}</li>
                    <li class="list-group-item"><span style={style}><b> Street</b></span> : {street}</li>
                    <li class="list-group-item"><span style={style}><b> Street Number</b></span> : {street_number}</li>
                    <li class="list-group-item"><span style={style}><b> Zip</b></span> : {zip}</li>
                    <li class="list-group-item"><span style={style}><b> Region id</b></span> : {region_id}</li>
                    <li class="list-group-item"><span style={style}><b> Occupation</b></span> : {occupation}</li>
                    <li class="list-group-item"><span style={style}><b> Details</b></span> : {details}</li>
                    <li class="list-group-item"><span style={style}><b> Photo</b></span> : {photo} <img width="50" src={`/backend/Coach_Profile_images/${photo}`} alt='profile photo'></img> </li>
                </ul>
            </div>
        )
    }
}

export default Success;