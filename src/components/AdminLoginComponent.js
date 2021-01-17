import React, { Component } from 'react';

import AdminServices from '../services/AdminServices';
import { Link, Redirect } from 'react-router-dom';


class AdminLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      adminUserName: "",
      adminPassword: "", userNameError: "",
      passwordError: ""
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);


    this.validateAdminPassword = this.validateAdminPassword.bind(this);

    this.validateField = this.validateField.bind(this);


  };
  handleBlur(event) {
    const { name } = event.target;


    this.validateField(name);
    return;
  }


  loginAdmin = (e) => {
    e.preventDefault();
    //    let admin = {adminUserName: this.state.adminUserName, adminPassword: this.state.adminPassword};
    AdminServices.loginAdmin(this.state.adminUserName, this.state.adminPassword).then(res => {
      alert("Login Successfully")
      this.setState({
        reset: true
      });
    }).catch(error => {
      console.log(error)
      alert("Please Enter UserName/Password")
    })

  }

  handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });


  }


  validateField(name) {
    let isValid = false;

    if (name === "adminUserName") isValid = this.validateAdminUserName();

    else if (name === "adminPassword") isValid = this.validateAdminPassword();

    return isValid;
  }



  validateAdminUserName() {
    let userNameError = "";
    const value = this.state.adminUserName;
    if (value.trim() === "") userNameError = "User Name is required";

    this.setState({
      userNameError
    });
    return userNameError === "";
  }

  validateAdminPassword() {
    let passwordError = "";
    const value = this.state.adminPassword;
    if (value.trim === "") passwordError = "Password is required";
    // else if (!passwordValidator.test(value))
    //   passwordError =
    //     "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }



  render() {
    if (this.state.reset) {

      return <Redirect to={'/list'} />
    }

    return (
      <div>
        <div class="card-header text-center bg-dark">
      <h4 class="text-light">Citizen Card Portal</h4>
     </div>
     
      <div className="page w-100 h-100 mt-5" style={{

        
        backgroundColor: "#dfcfcb",
        backgroundSize: "100% 100%",
        backgroundPosition: "top center"
        
    }}>
        <div className="row">

          <div class="col-sm-8 text-center admin" >
          </div>
          <div class="col-sm-4 signin text-center">

            <h4 class="text-center mt-2">Welcome Back Admin,</h4>
            <h2 class="text-center mt-2">Login Here!</h2>

            <form>

              <div class="form-inline">
                <label > Username &nbsp;</label>
                <input
                  style={{ borderRadius: "40px" }}


                  type="text"
                  placeholder="User Name"
                  name="adminUserName"
                  value={this.state.adminUserName}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"

                  className="form-control mt-3"


                />
              </div>
              {/* <div className="text-danger">{this.state.errors.uemailid}</div> */}
              <div class="form-inline">
                <label> Password&nbsp;</label>

                <input
                  style={{ borderRadius: "40px" }}
                  placeholder="Password "

                  type="Password"
                  name="adminPassword"
                  value={this.state.adminPassword}
                  onChange={this.handleChange}
                  className="form-control mt-3"
                  onChange={this.handleChange}

                />
              </div>
              {/* <div className="text-danger">{this.state.errors.upass}</div> */}
              <Link class="text-left mr-5 font-weight-light text-dark" to={'/updatePassword/:adminUserName'}><em>Forget password?</em></Link>

              {/* <a class="text-left mr-5 font-weight-light text-dark" href="/resetpassword">Forgot Password? </a> */}

              <br></br>
              <button className="btn btn-dark mt-3 mr-5 xs " onClick={this.loginAdmin} >Login</button>
              {/* <button className="btn btn-dark mt-3 mr-5 xs " onClick={this.submitHandler} href="/homepage">Log In</button> */}
              <br></br>
              <Link class="text-left text-dark mr-5" to={'/SignIn'}>New User? Register Here</Link>
              {/* <a href="/register" class="text-left text-dark mr-5">New User? Register Here</a> */}
              <br></br>
              <a href="/welcome" class="text-left text-dark font-weight-light mr-5">Homepage</a>


            </form>
          </div>
        </div>
        </div>
      </div>

     

    );

  }

}


export default AdminLoginComponent;