import React, {Component } from 'react'
import employeeService from '../services/employeeService';
import { withRouter } from 'react-router-dom';

class ListEmployeeComponent extends Component {
   

    constructor(props) {
        super(props)

        this.state = {
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee =this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);

    }
      
    componentDidMount(){
        employeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data})
        })
    }

    componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

 addEmployee(){
        this.props.history.push("/add-employee")
 }

editEmployee(id){
    this.props.history.push(`/edit-employee/${id}`)
}

viewEmployee(id){
    this.props.history.push(`/view-employee/${id}`)
}

deleteEmployee(id){
    employeeService.deleteEmployee(id).then((res)=>{
        this.setState({employees:this.state.employees.filter(employees=> employees.id !== id)})
    })

}
    
    render() {
        return (
            <div>
                <h2 className="text-center" >Employee List</h2>
                <div className="">
                    <button className=" btn btn-primary " style={{marginBottom:'1em'}} onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                 
                 <table className=" table table-striped table-bordered">
                     
                  <thead>
                      <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>Actions</th>
                          
                      </tr>
                  </thead>
                  <tbody>
                      {
                         this.state.employees.map(
                             employees =>
                             <tr key={employees.id}>
                                <td>{employees.firstName}</td>
                                <td>{employees.lastName}</td>
                                <td>{employees.emailId}</td>
                                <td>
                                    <button onClick={ () => this.editEmployee(employees.id)}  className="btn btn-success">Update</button>
                                    <button style={{marginLeft:'10px'}} onClick={ () => this.deleteEmployee(employees.id)}  className="btn btn-danger">delete</button>
                                     <button style={{marginLeft:'10px'}} onClick={ () => this.viewEmployee(employees.id)} className="btn btn-info">View</button>
                                </td>
                             </tr>
                         )
                      }
                  </tbody>


                 </table>

                </div>

            </div>
        )
    }
}

export default withRouter(ListEmployeeComponent)