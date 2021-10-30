import EmployeeList from './components/ListEmployeeComponent'
import Header from './components/header';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
function App() {
  return (
    <div>
    
    <Router>
      <Header/>
      
      <div className="container">
      <Switch>
        <Route  exact path="/" component={EmployeeList}/>
        <Route  path="/employees" component={EmployeeList}/>
        <Route  path="/add-employee" component={CreateEmployee}/>
        <Route  path="/edit-employee/:id" component={UpdateEmployeeComponent}/>
        <Route  path="/view-employee/:id" component={ViewEmployeeComponent}/>
        <EmployeeList/>
        </Switch>
        
        </div>
     
    </Router>
 
    </div>
  );
}

export default App;
