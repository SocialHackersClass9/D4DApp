import React from 'react';
import LocationsFilter from '../Components/LocationsFilter'
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            sports: {},
            loading: true
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    // change() {

    // }

    componentDidMount(){
        fetch("http://localhost:3001/search/locations")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: data,
                    loading: false
                });
            });
        
        console.log("state",this.state)
        this.state.locations.map(city => {
            console.log(city)
        });
        
    }



    render() {

    const text = this.state.loading ? "loading" : this.state.locations.map(city => <p>{city.city}</p>);
        
        return (
            <div>   
                <p>
                    {text}
                    
                    
                </p>
                
            </div>
               
        )
    }
}



export default Search;
