import React, { Component } from 'react'
import TimeForm from './TimeForm'
import Timer from './Timer'

class EditableTimer extends Component {
    render() {
        if(this.props.editFormOpen){
            return (
                <TimeForm
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        }else{
        return (
            <Timer
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
            />
        )
    }
    }
}

export default EditableTimer;
