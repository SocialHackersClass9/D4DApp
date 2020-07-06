import React from 'react';
//import LocationsFilter from '../Components/LocationsFilter'
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

    componentDidMount() {
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

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })

        let l = "", s = "", url = "";
        let matches = []
        if (e.target.name === "favLocation") {
            l = e.target.value;
        }
        if (e.target.name === "favSport") {
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
            <div className="container">
                <div className="row row-header align-self-center">
                    <div className="col-12 col-sm-12 col-xs-12 text-center">
                        <h1 className="text-center"> Instructor Search</h1>
                    </div>
                </div>
                <div className="searchFeat">
                    <div className="row align-self-center">
                        <div className="col-md-6 text-center">
                            <h2 className="text-center">Search via Location</h2>
                        </div>
                        <div className="col-md-6 text-center align-self-center">
                            <select name="favLocation" onChange={this.handleChange} value={this.state.favLocation}>
                                <option value="None">None</option>
                                {locations}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center align-self-center">
                            <h2 className="text-center">Search via Sports</h2>
                        </div>
                        <div className="col-md-6 text-center align-self-center">
                            <select name="favSport" onChange={this.handleChange} value={this.state.favSport}>
                                <option value="None">None</option>
                                {sports}
                            </select>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-xs-12 text-center align-self-center'>
                        <button type="button" className="btn btn-primary btn-lg"> CLICK TO SEARCH</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
