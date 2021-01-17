import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AdminSignInComponent extends Component {
  constructor() {
    super();
    this.state = {
      id: this.adminUserName,
      adminUserName: "",
      adminPassword: "",
      userNameError: "",
      passwordError: "",

      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.validateAdminPassword = this.validateAdminPassword.bind(this);

    this.validateField = this.validateField.bind(this);
  }

  handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });


  }
  handleBlur(event) {
    const { name } = event.target;


    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
    console.log(this.state)
    axios.post('http://localhost:8080/login/admin', this.state)
      .then(response => {
        console.log(response)
        alert("Sign In Successfully")
        this.setState({
          reset: true
        });
      })
      .catch(error => {
        console.log(error)
        alert("Please Enter UserName/Password")
      })
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
      return <Redirect to={'/Login/adminUserName/adminPassword'} />
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

          <div class="col-sm-4 signin text-center ">

            <h4 class="text-center mt-2">Just few steps away</h4>
            <h2 class="text-center mt-2">Register Here!</h2>

            <form onSubmit={this.handleSubmit}>

              <div class="form-inline">
                <label > User Name &nbsp;</label><input
                  style={{ borderRadius: "40px" }}


                  type="text"
                  placeholder="User Name"
                  name="adminUserName"
                  value={this.state.adminUserName}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control"


                />
              </div>
              {/* <div className="text-danger">{this.state.errors.uemailid}</div> */}
              <div class="form-inline">
                <label > Password &nbsp;</label>
                <input
                  style={{ borderRadius: "40px" }}

                  type="password"
                  placeholder="Password"
                  name="adminPassword"
                  value={this.state.adminPassword}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  autoComplete="off"


                  className="form-control mt-3"

                />
              </div>

              {/* <div className="text-danger">{this.state.errors.confirmpassword}</div> */}
              <br></br>
              <button className="btn btn-dark mr-5">Sign In</button>
              {/* <button className="btn btn-dark mr-5" onClick={this.submitHandler}>Submit</button> */}
              <br></br>

              <a href="/welcome" class="text-left text-dark mr-5">Homepage</a>
            </form>
          </div>
        </div>
      </div>
      </div>



    );
  }
}

export default AdminSignInComponent;