import React, {Component } from 'react'
import employeeService from '../services/employeeService'

class CreateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            lastName:'',
            emailId:''
        }

        
    }

   firstnameHandler=(event)=>{
       this.setState({firstName:event.target.value})

   }

   lastnameHandler=(event)=>{
       this.setState({lastName:event.target.value})
   }

   emailHandler=(event)=>{
    this.setState({emailId:event.target.value})
}

    saveEmployee =(e)=>{
        e.preventDefault()
        let employee ={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId}
        console.log('employee=>'+ JSON.stringify(employee))

        employeeService.createEmployee(employee).then((res)=>{
            this.props.history.push("/employees") 
        })
    }

    cancel(){
        this.props.history.push("/employees")    

    } 



    render() {
        return (
            <div>
               <div className="container">
                   <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center"> Add Employee</h3>
                    <div className="card-body " style={{padding:'2em'}}>
                        <form >
                          <div className="form-group" style={{marginBottom:'1em'}}>
                              <label> FirstName</label>
                              <input placeholder="First Name" name="firstname" className="form-control" 
                              value={this.state.firstName} onChange={this.firstnameHandler}/>
                          </div>

                          <div className="form-group" style={{marginBottom:'1em'}}>
                              <label> lastName</label>
                              <input placeholder="Last Name" name="lastname" className="form-control" 
                              value={this.state.lastName} onChange={this.lastnameHandler}/>
                          </div>

                          <div className="form-group" style={{marginBottom:'1em'}}>
                              <label> Email</label>
                              <input placeholder="Email" name="email" className="form-control" 
                              value={this.state.emailId} onChange={this.emailHandler}/>
                          </div>

                          <button className="btn btn-success" onClick={this.saveEmployee} style={{marginBottom:'1em'}}>save</button>
                          <button className="btn btn-danger " onClick={this.cancel.bind(this)} style={{marginLeft:"10px",
                          marginBottom:'1em'
                        }}>cancel</button>
                        </form>
                    </div>
                    </div>
                   </div>

               </div>
            </div>
        )
    }
}

export default CreateEmployee