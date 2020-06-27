import React, { Component } from 'react'

export default class Instructors extends Component {
    render() {
        const instructorItems = this.props.instructors.map(instructors => (
            <div className = "col-md-4" key={instructors.id}>
            <div className = "thumbnail text-center">
                <a href={`${instructors.id}`} onClick={(e)=>this.props.selectTheInstructor(e, instructors)}>
                    <img src={`/instructorspp/${instructors.id}.jpg`} alt={instructors.name} />
                    <p>
                        {instructors.name}
                    </p>
                </a>
                <div>
                    <b>{instructors.location}</b>
                    <hr/>
                    <button className="btn btn-primary"
                    onClick={(e)=>this.props.selectTheInstructor(e, instructors)}>Select Instructor</button>

                </div>
            </div>
        </div>
        )
        )
        return (
            <div className = "row">
               {instructorItems}
            </div>
        )
    }
}
