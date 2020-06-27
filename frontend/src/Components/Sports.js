import React, { Component } from 'react'

export default class Sports extends Component {
    render() {
        return (
            <div>
            {this.props.count} instructors found.
            <hr/>
                <div className="row">
                
                    <label>Select Sport
                        <select className="form-control" value={this.props.sports}
                        onChange={this.props.handleChangeSport}>
                        <option value="">ALL</option>
                        <option value="football">Football</option>
                        <option value="basketball">Basketball</option>
                        <option value="swimming">Swimming</option>
                        <option value="tennis">Tennis</option>
                        </select>
                    </label>
                </div>
                </div>
           
        )
    }
}