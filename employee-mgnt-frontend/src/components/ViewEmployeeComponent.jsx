import React, { Component } from 'react'
import employeeService from '../services/employeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            employees:{}
        }
    }

    componentDidMount(){
        employeeService.getEmployeeById(this.state.id).then((res)=>{
            this.setState({employees:res.data})
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
             <br/>
                <div className="card col-md-6 offsetmd-3">
                    <h3>View Employee Details</h3>
                   
                   <div className="card -body">
                       <div className="row">
                           <label>Employee Firstname:</label>
                           <div>{this.state.employees.firstName}</div>
                       </div>

                       <div className="row">
                           <label>Employee Lastname:</label>
                           <div>{this.state.employees.lastName}</div>
                       </div>

                       <div className="row">
                           <label>Employee Email:</label>
                           <div>{this.state.employees.emailId}</div>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent