import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AdminServices from '../services/AdminServices';





class ChangePasswordComponent extends Component {
  constructor() {
    super();
    this.state = {
      adminUserName: "",
      adminPassword: ""
    };


  };


  updateAdminPassword = (e) => {
    e.preventDefault();
    let admin = { adminUserName: this.state.adminUserName, adminPassword: this.state.adminPassword };
    AdminServices.updateAdminPassword(this.state.adminUserName, admin).then(res => {
      alert("Password Updated Successfully")
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


  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["adminUserName"]) {
      formIsValid = false;
      errors["adminUserName"] = "*Please enter Username.";
    }



    if (!fields["adminPassword"]) {
      formIsValid = false;
      errors["adminPassword"] = "*Please enter Password.";
    }




    this.setState({
      errors: errors
    });
    return formIsValid;


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
          <div class="col-sm-4 signin text-center">
            <h4 class="text-center mt-2">Oops! forgot password?</h4>
            <h2 class="text-center mt-2">Reset password Here!</h2>
            <form>

              <div class="form-inline">
                <label >User Name&nbsp;</label>
                <input
                  style={{ borderRadius: "40px" }}

                  type="text"
                  placeholder="User Name"
                  name="adminUserName"
                  value={this.state.adminUserName}
                  onChange={this.handleChange}
                  className="form-control mt-3"


                />
              </div>
              {/* <div className="text-danger">{this.state.errors.uemailid}</div> */}
              <div class="form-inline">
                <label>Password &nbsp;</label>
                <input
                  style={{ borderRadius: "40px" }}

                  type="Password"
                  placeholder="Password"
                  name="adminPassword"
                  value={this.state.adminPassword}
                  onChange={this.handleChange}
                  className="form-control mt-3"
                />
              </div>


              {/* <div className="text-danger">{this.state.errors.confirmpassword}</div> */}
              {/* <button className="mr-5 btn btn-dark mt-3 xs" onClick={this.submitHandler}>Submit</button> */}
              <button className="mr-5 btn btn-dark mt-3 xs" onClick={this.updateAdminPassword} >Update</button>
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


export default ChangePasswordComponent;