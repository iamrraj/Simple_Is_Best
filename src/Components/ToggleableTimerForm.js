import React, { Component } from 'react'
import TimeForm from './TimeForm'

export class ToggleableTimerForm extends Component {
    render() {
        if(this.props.isOpen){
            return(
                <TimeForm />
            )
        }
        else{
        return (
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon">
                    <i className="plus icon" />
                </button>
            </div>
        );
    }
}
}

export default ToggleableTimerForm
