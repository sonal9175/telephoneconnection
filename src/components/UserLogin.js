import React, { Component } from "react";
import "../styles/styles.css";
import UserRegisterService from "../services/UserRegisterService.js"
class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uemailid: "",
      upass: "",
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

  if(this.validate()){
  UserRegisterService.getUser(this.state.uemailid,this.state.upass).then(res =>{

    alert("Logged In Successfully")
    this.redirect()
})
.catch(err=>alert("Invalid username or password"));

//if(this.validate()){
  //  alert("Successful")
//}
 }
 }
 redirect(){
   window.location.href="/home"
 }
 validate(){
    let errors = {};
     let isValid= true;

    const { uemailid, upass } = this.state;
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
          
            <h4 class="text-center mt-2">Welcome Back User,</h4>
            <h2 class="text-center mt-2">Login Here!</h2>

          <form class=" ml-5 form1 text-center">

          <div class="form-inline mt-5">
          <br></br>
          <label > Email Id &nbsp; &nbsp;</label>
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
            <div class="form-inline mt-4 mb-4">
            &nbsp;
            <label clas="mt-4"> Password &nbsp;</label>
              
              <input 
              style={{borderRadius:"40px"}}
              type="password"
                value={this.state.upass}
                name="upass"
                className="form-control"
                placeholder="Enter Password"
                onChange={this.changeHandler}
                
              />
            </div>
            <div className="text-danger">{this.state.errors.upass}</div>
            
           
            <a class="text-left mr-5  mt-4 mb-4 font-weight-light text-dark" href="/resetpassword"><b>Forgot Password? </b></a>
           
            <br></br>
            <button className="btn btn-dark mt-3 mb-4 mr-5 xs " onClick={this.submitHandler} >Log In</button>
            
            <br></br>
           
            <a href="/register" class="text-left text-dark mt-5 mr-5"><b>New User? Register Here</b></a>
            
            <div>
            
            <a href="/welcome" class="text-left text-dark mt-5 font-weight-light mr-5"><b>Homepage</b></a>
            </div>
            
          </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default UserLogin;