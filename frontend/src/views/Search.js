import React, { Component } from 'react';
import Sports from '../Components/Sports';
import Instructors from '../Components/Instructors';
import Locations from '../Components/Locations';

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = { instructors:[], filteredInstructors:[],}
      
      this.handleChangeSport = this.handleChangeSport.bind(this);
      this.handleChangeLocation = this.handleChangeLocation.bind(this);
    }
    componentWillMount() {
      fetch("http://localhost:8000/instructors").then(res => res.json())
      .then(data => this.setState({
        instructors: data,
        filteredInstructors: data
      }));
    }
    
    handleChangeSport(e) {
        this.setState({sports: e.target.value});
        this.listInstructors();
      }

    handleChangeLocation(e) {
        this.setState({location: e.target.value});
        this.listInstructors();
      }

      render() {
        return (
          <div className="container">
            <h1>Find Your Instructor</h1>
            <hr/>
            <div className="row">
              <div className="col-md-8">
                <Sports sports={this.state.sports} handleChangeSport={this.handleChangeSport} 
                count={this.state.filteredInstructors.length} />
                
                <Locations location={this.state.location} handleChangeLocation={this.handleChangeLocation} />

                <hr/>
                <Instructors instructors={this.state.filteredInstructors} selectTheInstructor={this.selectTheInstructor} />
              </div>
              <div className="col-md-4">
      
              </div>
            </div>
          </div>
        );
      }
      }