import React, { Component } from 'react'

export default class Locations extends Component {
    render() {
        return (
            <div className="row">
                <label>Select Locations
                <select className="form-control" value={this.props.location}
                onChange={this.props.handleChangeLocation}>
                    <option value="">ALL</option>
                    <option value="Athens">Athens</option>
                    <option value="Thessaloniki">Thessaloniki</option>
                    <option value="Lamia">Lamia</option>
                    <option value="Komotini">Komotini</option>
                    <option value="Ioannina">Ioannina</option>
                    <option value="Corfu">Corfu</option>
                    <option value="Mytilene">Mytilene</option>
                    <option value="Tripoli">Tripoli</option>
                    <option value="Ermoupoli">Ermoupoli</option>
                    <option value="Larissa">Larissa</option>
                    <option value="Patras">Patras</option>
                    <option value="Kozani">Kozani</option>
                    </select>
                </label>
            </div>
        )
    }
}