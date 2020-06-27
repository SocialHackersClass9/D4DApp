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
        this.listInstructorsBySports();
      }
    listInstructorsBySports(){
        this.setState(state => {
          if(state.sports !==''){
          return { filteredInstructors: state.instructors.filter(a=>
            a.sports.indexOf(state.sports)>=0
            )}
        }        
        return {filteredInstructors:state.instructors}
    })
  }

    handleChangeLocation(e) {
        this.setState({location: e.target.value});
        this.listInstructorsByLocation();
      }

    listInstructorsByLocation(){
      this.setState(state => {
        if(state.location !==''){
          return { filteredInstructors: state.instructors.filter(a=>
            a.location.indexOf(state.location)>=0
            )}
        }
        return {filteredInstructors:state.instructors}
      })
    }
    
      render() {
        return (
          <div className="container">
            <h1>Find Your Instructor</h1>
            <hr/>
            <div className="row">
              <div className="col-md-8">
                
                <Sports count={this.state.filteredInstructors.length} sports={this.state.sports} 
                handleChangeSport={this.handleChangeSport} />
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