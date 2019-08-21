import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

class TimersDashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            timers:[
                {
                    title:"Practice squat",
                    project:'Gym Chores',
                    id:123,
                    elapsed:5456099,
                    runningSince:Date.now(),
                },
                {
                    title:"Bale squash",
                    project:'KitcheChores',
                    id:1234,
                    elapsed:1273998,
                    runningSince:null,
                },
            ],
        };
    }
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                     <EditableTimerList 
                        timers ={this.state.timers}
                     />
                     <ToggleableTimerForm/>
                </div>
            </div>
        )
    }
}

export default TimersDashboard;
