import React, { Component } from 'react'
import axios from 'axios'

export class Axios extends Component { 
    constructor(props){
        super(props);
        this.state = {
            emp: []
          }
        
        this.onSubmit = this.onSubmit.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    getEmployee() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
              //const emps = res.data;
              //this.setState({ emps });
              console.log(res.data);
            })
    }
    componentDidMount(){
        this.getEmployee();
    }

    // To Add Data into Api Field
    onSubmit(e) {
        e.preventDefault();
        const employee = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
        }
        axios.post('http://dummy.restapiexample.com/api/v1/employees', employee)
        .then(res => console.log(res.data));
    }

     // To Update Data into Api Field
    update(e) {
        e.preventDefault();
        const employee = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
        }
        axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
        .then(res => console.log(res.data));
    }


// To Delate Data into Api Field
    delete(e) {
        e.preventDefault();
        axios.delete('http://dummy.restapiexample.com/api/v1/delete/{this.state.id}')
        .then(res => console.log(res.data));
    }



    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Axios
