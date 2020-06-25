import React from 'react';
import LocationsFilter from '../Components/LocationsFilter'
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            sports: [],
            loadingLocations: true,
            
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
                    loadingLocations: false
                })
            });
        
        
        fetch("http://localhost:3001/search/sports")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    sports: data,
                    loadingSports: false
                })
            });
        
    }



    render() {

        const locations = this.state.loadingLocations ? "loading" : this.state.locations.map(city => <option>{city.city}</option>)
    
        const sports = this.state.loadingSports ? "loading" : this.state.sports.map(sport => <option value={sport.sport}>{sport.sport}</option>)

        return (
            <div>   
                <p>
                    <select>
                        {locations}
                    </select>

                    <select>
                        {sports}
                    </select>
                    
                    
                    
                </p>
                
            </div>
               
        )
    }
}



export default Search;
