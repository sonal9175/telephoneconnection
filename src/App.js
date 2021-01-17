import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import TelephoneConnectionComponent from './components/TelephoneConnectionComponent';
import CitizenIdComponent from './components/CitizenIdComponent';
import BankAccountComponent from './components/BankAccountComponent';
import ListTelephoneConnectionComponent from './components/ListTelephoneConnectionComponent';
import SuccessTelephoneConnectionComponent from './components/SuccessTelephoneConnectionComponent';
import Welcome from './components/Welcome.js';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import UpdatePassword from './components/UpdatePassword';
import AdminLoginComponent from './components/AdminLoginComponent';
import ChangePasswordComponent from './components/ChangePasswordComponent';
import AdminSignInComponent from './components/AdminSignInComponent';

function App() {
  return (
    <div >
      
        <HeaderComponent/>
      
       
        <Router>
        <Switch>
          <Route path='/home' exact component={HomeComponent} />
          <Route path='/citizenid' component={CitizenIdComponent} />
          <Route path='/bankaccount' component={BankAccountComponent} />
          <Route path='/create' component={TelephoneConnectionComponent} />
          <Route path='/success' component={SuccessTelephoneConnectionComponent} />
          <Route path='/list' component={ListTelephoneConnectionComponent} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={UserLogin} />
          <Route path='/register' component={UserRegister} />
          <Route path='/resetpassword' component={UpdatePassword} />
          <Route path="/updatePassword/:adminUserName" exact component={ChangePasswordComponent}></Route>
            <Route path="/SignIn" exact component={AdminSignInComponent}></Route>
            <Route path="/AdminLogin/:adminUserName/:adminPassword" exact component={AdminLoginComponent}></Route>

          
        </Switch>
        </Router>
       
    </div>
  );
}

export default App;
