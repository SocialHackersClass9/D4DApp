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

        let l = "",s = "",url = "";
        let matches = []
        if(e.target.name === "favLocation"){
            l = e.target.value;
        }
        if(e.target.name === "favSport") {
            s = e.target.value;
        }
        
        // if(l.length & s.length > 0){
            url = `http://localhost:3001/location=${l}-sport=${s}`
            fetch(url)
                .then(res => res.json())
                .then(data => matches = data)
        //}
        console.log(url)
    }



    render() {

        const locations = this.state.loadingLocations ? "loading" : this.state.locations.map(city => <option value={city.city}>{city.city}</option>)
    
        const sports = this.state.loadingSports ? "loading" : this.state.sports.map(sport => <option value={sport.sport}>{sport.sport}</option>)

        //const matches = this.state.loadingMatches ? "select something" : this.state.matches.map(match => <div><p>{match.name}</p><p>{match.family}</p></div>)
        
        
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
                    
                    {/* <div>
                        {matches}
                    </div> */}
                    
                </p>
                
            </div>
               
        )
    }
}



export default Search;
