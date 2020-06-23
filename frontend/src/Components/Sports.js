import React, { Component } from 'react'

export default class Sports extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                {this.props.count} instructors found.
                </div>
                <div className="col-md-4">
                
                    <label>Select Sport
                        <select className="form-control" value={this.props.sports}
                        onChange={this.props.handleChangesport}>
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