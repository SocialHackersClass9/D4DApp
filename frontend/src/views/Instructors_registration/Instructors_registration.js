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
        first_name: '',
        last_name: '',
        year_of_birth: '',
        phone: '',
        sports: [],
        locations: [],
        sports_name: [],
        locations_name: [],
        education: '',
        gender: '',
        street: '',
        street_number: '',
        zip: '',
        region_id: '',
        education: '',
        occupation: '',
        details: '',
        photo: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    lastStep = () => {
        const { email, user_name, password, first_name, last_name, year_of_birth, region_id, phone, education, gender, street, street_number, zip, occupation, details, photo, locations, sports, locations_name, sports_name } = this.state;
        axios.post(process.env.REACT_APP_API_URL + '/instructors/upload/data', JSON.stringify({ email, user_name, password, first_name, last_name, year_of_birth, region_id, phone, education, gender, street, street_number, zip, occupation, locations, sports, details, photo: `/backed/Coach_Profile_images/${photo}` }), {
            headers: {
                'key': 'd4dapplicationregistrationapipostmethod1234567890',
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            }
        })
    }

    inputChange = input => e => {

        if (input === 'photo') {
            let file = e.target.files[0].name;
            this.setState({
                [input]: file
            });
        }
        else if (input === 'sports') {

            if(e != null){

            if (e.length != 0) {
             e.map(i => { this.setState({ sports: [...this.state.sports, i.value], sports_name : [...this.state.sports_name ,i.name]}) })
            }
            else{
            this.setState({ sports: [] , sports_name : []})
         }
         }
          else {
                this.setState({ sports: [] , sports_name : [] })
            }
        }


        else if (input === 'locations') {

            if(e != null){

            if (e.length != 0) {
                e.map(i => { this.setState({ locations: [...this.state.locations, i.value] , locations_name : [...this.state.locations_name ,i.name] }) })
            }
            else{
            this.setState({ locations: [], locations_name : [] })
         }
         }
          else {
                this.setState({ locations: [], locations_name : []})
            }
        }


        else {
            this.setState({
                [input]: e.target.value
            });
        }
    };

    render() {
        const { step } = this.state;
        const { email, user_name, password, conpassword, first_name, last_name, year_of_birth, place_of_birth, phone, sports, education, gender, street, street_number, zip, region_id, occupation, details, locations, photo , sports_name ,locations_name} = this.state;
        const values = { email, user_name, password, conpassword, first_name, last_name, year_of_birth, place_of_birth, phone, sports, education, gender, street, street_number, zip, region_id, occupation, details, locations, photo, sports_name ,locations_name };

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

export default Instructors_registration;
