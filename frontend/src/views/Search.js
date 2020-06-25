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
            favSport: "None",
            favLocation: "None",
            matches: [],
            // loadinLocationMatches: true,
            // loadingSportMatches : true
            loadingMatches: true
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

        
        if(this.state.favLocation&&this.state.favSport !== "None"){
            
            const s = this.state.favSport;
            const l = this.state.favLocation;
            const url = `http://localhost:3001/location=${l}-sport=${s}`
            console.log(url)
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({matches: data,loadingMatches : false}))
        }
        console.log("state 2 : ",this.state.matches)
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
                        <option value="None">None</option>
                        {locations}
                    </select>

                    <select name="favSport" onChange={this.handleChange} value={this.state.favSport}>
                    <option value="None">None</option>
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
