import axios from "axios";

const  EMPLOYEE_API_GET_URL ="http://localhost:9191/api/v1/employees";
const EMPLOYEE_API_POST_URL ="http://localhost:9191/api/v1/addEmployee";


class employeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_GET_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_POST_URL,employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_GET_URL + '/'+employeeId);
    }

    updateEmployee(employee,employeeId){
        return axios.put(EMPLOYEE_API_GET_URL +'/'+employeeId,employee);
    }

    
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_GET_URL + '/'+employeeId);
    }


}

export default new employeeService()