import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';




class HeaderComponent extends Component {
  render() {

    if (window.location.pathname === '/login' || window.location.pathname === '/resetpassword' || window.location.pathname === '/welcome' || window.location.pathname === '/register'
      || window.location.pathname === '/AdminLogin/:adminUserName/:adminPassword' || window.location.pathname === '/updatePassword/:adminUserName' || window.location.pathname === '/SignIn') return null;
    return (
      <div class="bg-img">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand " href="/"><b>CITIZEN CARD SYSTEM</b></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" href="/home"><HomeIcon /><b>Home</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/citizenid"><PersonIcon /><b>Citizen Id</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/bankaccount"><AccountBalanceIcon /><b>Bank Account</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/create"><PhoneIcon /><b>Telephone Connection</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/welcome"><ExitToAppIcon/><b>Logout</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    )
  }
}

export default HeaderComponent