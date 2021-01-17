import React, { Component } from "react";
import "../styles/styles.css";
import UserRegisterService from "../services/UserRegisterService.js"
class UpdatePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uemailid: "",
      upass: "",
      confirmpassword:"",
      errors:{}
    };
    
  }
  changeHandler=(event)=>
  {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    
  }
 
 submitHandler=(e)=>{
  e.preventDefault();
  let user = {uemailid: this.state.uemailid, upass: this.state.upass};
  if(this.validate()){
  UserRegisterService.updateUserPassword(this.state.uemailid,user).then(res =>{

    alert("Password Successfully Updated")
    this.redirect()
})
.catch(err=>alert("Invalid username"));
  }

 }
 redirect(){
  window.location.href="/login"
}

 validate(){
    let errors = {};
     let isValid= true;

    const { uemailid, upass, confirmpassword } = this.state;
    if (!uemailid) {
        isValid= false;
        errors["uemailid"] = "Please enter your email Address.";
      
    }
    if (typeof uemailid !== "undefined") {
          
        var pattern = new RegExp("^[A-Za-z]+@(.+)$");
        if (!pattern.test(uemailid)) {
          isValid = false;
          errors["uemailid"] = "Please enter valid email address.";
        }
      }
    if (!upass ) {
        isValid= false;
        errors["upass"] = "Please enter your Password.";
      
    }
    if (!confirmpassword ) {
        isValid= false;
        errors["upass"] = "Please enter your Password.";
    }
    if (upass !== confirmpassword) {
        isValid = false;
        errors["confirmpassword"] = "Passwords don't match.";
      }

      this.setState({
        errors: errors
      });
  
      return isValid;
 }

  render() {
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

        <div class="col-sm-8 text-center signup" >
          </div>
          <div class="col-sm-4 signin text-center">
          <h4 class="text-center mt-2">Oops! forgot password?</h4>
            <h2 class="text-center mt-2">Reset password Here!</h2>
          <form class="form1 ml-5">

          <div class="form-inline mt-5">
          <label> Email Id&nbsp;&nbsp;&nbsp;</label>
              <input
              style={{borderRadius:"40px"}}
                type="email"
                value={this.state.uemailid}
                name="uemailid"
                className="form-control"
                placeholder="Enter Email"
                onChange={this.changeHandler}
               
              />
            </div>
            <div className="text-danger">{this.state.errors.uemailid}</div>
            <div class="form-inline mt-4">
            <label> Password&nbsp;</label>
              <input 
              style={{borderRadius:"40px"}}
              type="password"
                value={this.state.upass}
                name="upass"
                className="form-control"
                placeholder="Enter New Password"
                onChange={this.changeHandler}
                
              />
            </div>
            <div className="text-danger">{this.state.errors.upass}</div>
            <div class="form-inline mt-3">
            <label > Confirm &nbsp;  <br></br>Password&nbsp;</label>
              <input
              style={{borderRadius:"40px"}}
                type="password"
                value={this.state.confirmpassword}
                name="confirmpassword"
                className="form-control mt-3"
                placeholder="Confirm New Password"
                onChange={this.changeHandler}
             
              />
            </div>
            <div className="text-danger">{this.state.errors.confirmpassword}</div>
            <button className="mr-5 ml-0 btn btn-dark mt-3 xs" onClick={this.submitHandler}>Submit</button>
            <br></br>
            <br></br>
            <a href="/welcome" class="text-left text-dark mr-5 mt-5"><b>Homepage</b></a>
          </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default UpdatePassword;