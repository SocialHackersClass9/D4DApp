import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//import LocationsFilter from '../Components/LocationsFilter'
//

/* const all_instructors = [
    {
        "id": 1, "first_name": "Katerina", "last_name": "Ambrazi",
        "locations": [{ "id": 1, "name": "Athens", "region_id": 1, "region_name": "Attiki" }],
        "sports": [{ "id": 1, "name": "Volley" }]
    },
    {
        "id": 2, "first_name": "Alexander", "last_name": "Smith",
        "locations": [
            { "id": 1, "name": "Athens", "region_id": 1, "region_name": "Attiki" },
            { "id": 1, "name": "Thessaloniki", "region_id": 2, "region_name": "Macedonia" }
        ],
        "sports": [{ "id": 2, "name": "Basket" }]
    }
]; */

function ResultItem(props) {
    const it = props.item;
    return (
        <tr>
            <td>{it.id}</td>
            <td>{it.first_name}</td>
            <td>{it.last_name}</td>
            <td>{it.locations.map(it => it.name).join(", ")}</td>
            <td>{it.sports.map(it => it.name).join(', ')} </td>
            <td><button> <Nav.Link href="/instructor/{id}">Contact</Nav.Link></button></td>

        </tr>
    )
}

function Result(props) {

    const items = props.instructors.map(item => <ResultItem item={item} />);

    return (
        <div className='col-12 col-sm-12 col-xs-12'>
            <table className="table text-center ">
                <tr>
                    <td><strong>Id</strong></td>
                    <td><strong>First Name</strong></td>
                    <td><strong>Last Name</strong></td>
                    <td><strong>Locations</strong></td>
                    <td><strong>Sports</strong></td >
                    <td><strong>Contact</strong></td >
                </tr >
                {items}
            </table >
        </div >
    )
}

//  <table </table>
/*
{ this.state.matches.length < 1 &&
        <span>No result found</span>
}
{ this.state.matches.length > 0 &&
        <table>
            <tr>
                <td>Id</td>
                <td>first name</td>
                <td>last name</td>
                <td>locations</td>
                <td>sports</td>
                <td>contact</td>
            </tr>
        </table>
}
*/


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            locations: [],
            sports: [],
            loadingLocations: true,
            loadingSports: true,
            favSport: null,
            favLocation: null,
            instructors: [],
            matches: [],
            loadingMatches: true
        }
        this.favSportChanged = this.favSportChanged.bind(this);
        this.favLocationChanged = this.favLocationChanged.bind(this);
    }
    // change() {

    // }

    componentDidMount() {
        console.log("rerender");
        const baseUrl = process.env.REACT_APP_API_URL;
        this.setState({ loadingLocations: true });
        fetch(baseUrl + '/regions')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    locations: data,
                    loadingLocations: false
                })
            });


        this.setState({ loadingSports: true });
        fetch(baseUrl + "/sports")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    sports: data,
                    loadingSports: false
                })
            });
        fetch(baseUrl + '/instructors')
            .then(response => response.json())
            .then(data => {
                this.setState({ instructors: data });
            });

    }
    favLocationChanged(e) {
        this.setState({ favLocation: e.target.value });
    }
    favSportChanged(e) {
        this.setState({ favSport: e.target.value });
    }
    filterInstructors() {
        const sport_id = this.state.favSport === null ? null : parseInt(this.state.favSport);
        console.log(sport_id)
        return this.state.instructors.filter(item => {
            let res = true;
            console.log(item.sports)
            if (sport_id != null) {
                res = res && item.sports.some(sport => sport.sport_id === sport_id);
            }
            console.log(res)
            return res;
        });
    }
    render() {

        const locations = this.state.loadingLocations ? "loading" : this.state.locations.map(item => <option value={item.name}>{item.name}</option>)

        const sports = this.state.loadingSports ? "loading" : this.state.sports.map(item => <option value={item.id}>{item.name}</option>)

        const matches = this.filterInstructors();

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
                            <select name="favLocation" onChange={this.favLocationChanged} value={this.state.favLocation}>
                                <option value="">All</option>
                                {locations}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-center align-self-center">
                            <h2 className="text-center">Search via Sports</h2>
                        </div>
                        <div className="col-md-6 text-center align-self-center">
                            <select name="favSport" onChange={this.favSportChanged} value={this.state.favSport}>
                                <option value="">All</option>
                                {sports}
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className='col-12 col-sm-12 col-xs-12 text-center align-self-center'>
                            <h3><strong> Results</strong></h3>
                        </div>
                    </div>
                    {matches.length === 0 &&
                        <div> <strong>Sorry! No results found</strong></div>
                    }
                    {matches.length > 0 &&
                        <Result instructors={matches} />
                    }
                </div>
            </div>
        )
    }
}

export default Search;
