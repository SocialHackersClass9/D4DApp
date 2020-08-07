import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import AppContext from '../context';
import "../App.css";
import "./Search.css";


function ResultItem(props) {
    const it = props.item;
    let url = "/instructor/" + it.id;
    return (
        <tr>
            <td>{it.id}</td>
            <td>{it.first_name}</td>
            <td>{it.last_name}</td>
            <td>{it.locations.map(it => it.name).join(", ")}</td>
            <td>{it.sports.map(it => it.name).join(', ')} </td>
            <td><button> <Nav.Link href={url} >Contact</Nav.Link></button></td>
        </tr>
    )
}

function Result(props) {

    const items = props.instructors.map(item => <ResultItem item={item} />);

    return (
        <div className='col-md-12 col-sm-10 col-xs-10'>
            <table className="table text-center">
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

class Search extends React.Component {
    static contextType = AppContext;
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
        fetch(baseUrl + '/instructors', {
            headers: {
                "key": "123"
            }
        })
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
        const sport_id = !this.state.favSport ? null : parseInt(this.state.favSport);
        const region_id = !this.state.favLocation ? null : parseInt(this.state.favLocation);
        // console.log(region_id)
        return this.state.instructors.filter(item => {
            let res = true;
            if (sport_id != null) {
                res = res && item.sports.some(sport => sport.sport_id === sport_id);
            }
            console.log(sport_id);
            if (region_id != null) {
                res = res && item.locations.some(location => location.region_id === region_id);
            }
            return res;
        });

    }
    render() {

        const locations = this.state.loadingLocations ? "loading" : this.state.locations.map(item => <option value={item.id}>{item.name}</option>)

        const sports = this.state.loadingSports ? "loading" : this.state.sports.map(item => <option value={item.id}>{item.name}</option>)

        const matches = this.filterInstructors();


        return (
            <AppContext.Consumer>
                {context => (
                    <div className="sepNav">
                        <div className="container">
                            <div className="row row-header align-self-center">
                                <div className="col-md-12 col-sm-12 col-xs-12 text-center" >

                                    <h1 className="text-center"> Instructor Search Page</h1>
                                    {context.user == null &&
                                        (
                                            <div>
                                                <p className="userStatusP">Dear User, remember that in order to contact an instructor,
                                            you need to be logged in!<br></br> Here you can look for instructors
                                            that match your location, your sports of preference or both!</p></div>
                                        )
                                    }
                                    {context.user != null &&
                                        (
                                            <div>
                                                <p className="userStatusP">Hello, <strong>{context.user.user_name}</strong>. Here you can look for instructors
                                                that match your location, your sports of preference or both!
                                                By pressing the Contact Link you will be able to see the instructor's details
                                                and contact him/her.</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="searchFeat">
                                <div className="row">
                                    <div className="col-md-5 text-center">
                                        <h2 className="text-center"><strong>Search via Location</strong></h2>
                                    </div>
                                    <div className="col-md-5 text-center">
                                        <select name="favLocation" onChange={this.favLocationChanged} value={this.state.favLocation}>
                                            <option value="">All</option>
                                            {locations}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 text-center">
                                        <h2 className="text-center"><strong>Search via Sports</strong></h2>
                                    </div>
                                    <div className="col-md-5 text-center">
                                        <select name="favSport" onChange={this.favSportChanged} value={this.state.favSport}>
                                            <option value="">All</option>
                                            {sports}
                                        </select>
                                    </div>
                                </div>


                                <div className="resultFeat">
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
                        </div>
                    </div>
                )
                }
            </AppContext.Consumer>
        )
    }
}

export default Search;
