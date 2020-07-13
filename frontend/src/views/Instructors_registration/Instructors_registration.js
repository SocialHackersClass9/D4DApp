import React, { Component } from 'react';
import axios from 'axios';
import AccountSetup from './AccountSetup';
import SocialProfiles from './SocialProfiles';
import MoreInfo from './MoreInfo'
import Success from './Success';
export class Instructors_registration extends Component {
    state = {
        step: 1,
        email: '',
        user_name: '',
        password: '',
        conpassword: '',
        first_name : '',
        last_name : '',
        year_of_birth: '',
        phone: '', 
        sport: [],
        location: [], 
        education: '', 
        gender : '',
        street : '',
        street_number : '',
        zip : '',
        region_id : '',
        education : '',
        occupation : '',
        details : '',
        photo: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    lastStep = () => {
        const { email, user_name, password, first_name, last_name, year_of_birth, region_id,phone , education, gender, street, street_number, zip, occupation, details, photo ,location,sport } = this.state;
        axios.post('http://localhost:3001/api/Instructors_registration/upload/data', JSON.stringify({ email, user_name, password, first_name, last_name, year_of_birth, region_id, phone , education, gender, street, street_number, zip, occupation, location , sport, details, photo: `/backed/Coach_Profile_images/${photo}` }), {
            headers: {
              'key': 'd4dapplicationregistrationapipostmethod1234567890',
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            }
          })
    }

    inputChange = input => e => {

    if(input === 'photo'){            
            let file = e.target.files[0].name ;
            this.setState({
            [input] : file
        });
     }

    else if(input === 'sport'){
         if(e !== null){
        this.setState({
            [e.name] : e.value
        });
        e.map(i => {this.setState({...this.state , sport : [...this.state.sport , i.value]})})
         }else{
             this.setState({...this.state , sport : []})
         } 
    }

    else if(input === 'location'){
        if(e !== null){
        this.setState({
            [e.name]: e.value
        });
        e.map(i => {this.setState({...this.state , location : [...this.state.location , i.value]})})
     }
    else{
        this.setState({...this.state , location : []})
    }}

    else{
        this.setState({
            [input]: e.target.value
        });
    }
    };

    render() {
        const { step } = this.state;
        const { email,user_name,password,conpassword,first_name ,last_name ,year_of_birth ,place_of_birth ,phone, sport , education , gender ,street ,street_number,zip ,region_id ,occupation ,details,location ,photo} = this.state;
        const values = { email,user_name,password,conpassword,first_name ,last_name ,year_of_birth ,place_of_birth ,phone, sport , education , gender ,street ,street_number,zip ,region_id ,occupation ,details,location ,photo };

        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <SocialProfiles
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        lastStep={this.lastStep}
                        values={values}
                    />
                );
            case 3:
                return (
                    <MoreInfo
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    lastStep={this.lastStep}
                    values={values}
                    />
                );
                case 4:
                    return (
                        <Success
                            values={values}
                        />
                    );
        }
    }
}

export default Instructors_registration ;
