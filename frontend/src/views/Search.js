import React from 'react';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: {},
            sports: {}
        }
        this.locationsData = this.locationsData.bind(this)
    }
    change() {

    }

    locationsData(){
        fetch("localhost:3001/search/locations")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    location: data
                })
            })
    }

    render() {

        

        return (
            <div>   
                <p>
                    {this.state.locations}
                </p>
                
            </div>
               
        )
    }
}

