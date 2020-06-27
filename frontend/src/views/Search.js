import React from 'react';
import LocationsFilter from '../Components/LocationsFilter'
class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            sports: [],
            loadingLocations: true,
            loadingSports: true,
            favSport: "*",
            favLocation: "*",
            matches: [],
            loadinLocationMatches: true,
            loadingSportMatches : true
            
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e){
        const {name,value} = e.target
        this.setState({[name]:value})

        const response = fetch(`http://localhost:3001/location=${this.state.favLocation}-sport=${this.state.favSport}`)
        const json = response.json()
        const data = this.setState({user: data,loadinMatches : false})


    }



    render() {

        const locations = this.state.loadingLocations ? "loading" : this.state.locations.map(city => <option value={city.city}>{city.city}</option>)
    
        const sports = this.state.loadingSports ? "loading" : this.state.sports.map(sport => <option value={sport.sport}>{sport.sport}</option>)

    const matches = this.state.loadingMatches ? "select something" : this.state.matches.map(match => <div><p>{match.name}</p><p>{match.family}</p></div>)

        console.log("state : ",this.state)
        return (
            <div>   
                <p>
                    <select name="favLocation" onChange={this.handleChange} value={this.state.favLocation}>
                        {locations}
                    </select>

                    <select name="favSport" onChange={this.handleChange} value={this.state.favSport}>
                        {sports}
                    </select>
                    
                    <div>
                        {matches}
                    </div>
                    
                </p>
                
            </div>
               
        )
    }
}



export default Search;
