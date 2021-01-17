import React, { Component } from 'react';
import TelephoneConnectionService from '../services/TelephoneConnectionService';
import tele2 from './images/tele2.jpg'

class TelephoneConnectionComponent extends Component {
    constructor(){
        super();
        this.state ={
          /* citizenId:'',
           citizenName:'',
           citizenAge:'',
           citizenAddress:'',
           citizenMotherName:'',
           citizenFatherName:'',*/
           fields:{},
            errors:{}
        };
            
        
        this.handleChange=this.handleChange.bind(this);
        this.saveConnection = this.saveConnection.bind(this);
    }
   
   handleChange(e){
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({[nam]: val});
    
   } 
  
    saveConnection = (e) => {
        e.preventDefault();
        
        let telephone = {citizenId: this.state.citizenId,citizenName: this.state.citizenName, citizenAge: this.state.citizenAge, citizenAddress: this.state.citizenAddress,
            citizenMotherName: this.state.citizenMotherName,citizenFatherName: this.state.citizenFatherName};
        console.log('telephone => ' + JSON.stringify(telephone));
        if(this.validate()){
        alert("Telephone Connection established successfully! ");
        
        TelephoneConnectionService.createNewTelephoneConnection(telephone).then(res=>{
            this.props.history.push('/list');
        });
        }

        }

    validate(){
       
        let errors = {};
        let isValid= true;

        const { citizenId, citizenName,citizenAge,citizenAddress,citizenMotherName,citizenFatherName} = this.state;
        if (!citizenId) {
            isValid= false;
            errors["citizenId"] = "*Please enter your citizen id!";
          
        }
        
          if (!citizenName) {
            isValid= false;
            errors["citizenName"] = "*Please enter your name!";
          
          }
        if (typeof citizenName !== "undefined") {
              
            var pattern = new RegExp("^[a-zA-Z ]");
            if (!pattern.test(citizenName)) {
              isValid = false;
              errors["citizenName"] = "*Please enter alphabet characters only!";
            }
        
          }
          if (!citizenAge) {
            isValid= false;
            errors["citizenAge"] = "*Please enter your age!";
          
        }
        if (!citizenAddress) {
            isValid= false;
            errors["citizenAddress"] = "*Please enter your address!";
          
        }
        if (typeof citizenAddress !== "undefined") {
              
            var pattern = new RegExp("^[0-9a-zA-Z ]");
            if (!pattern.test(citizenAddress)) {
              isValid = false;
              errors["citizenAddress"] = "*Please enter valid address!";
            }
          }
          if (!citizenMotherName) {
            isValid= false;
            errors["citizenMotherName"] = "*Please enter your mother's name!";
          
        }
        if (typeof citizenMotherName !== "undefined") {
              
            var pattern = new RegExp("^[a-zA-Z ]");
            if (!pattern.test(citizenMotherName)) {
              isValid = false;
              errors["citizenMotherName"] = "*Please enter alphabet characters only!";
            }
          }
          if (!citizenFatherName) {
            isValid= false;
            errors["citizenFatherName"] = "*Please enter your father's name!";
          
        }
        if (typeof citizenFatherName !== "undefined") {
           
        
            var pattern = new RegExp("^[a-zA-Z ]");
            if (!pattern.test(citizenFatherName)) {
              isValid = false;
              errors["citizenFatherName"] = "*Please enter alphabet characters only!";
            }
        }
       
       
          this.setState({
            errors: errors
          });
      
          return isValid;

    }
    cancel(){
        this.props.history.push('/home');
    }
    view(){
        this.props.history.push('/list');
    }


    render() {
        return (
            <div>
                
                 <div style={{backgroundImage:`url(${tele2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            
                        <div className = " row">
                            <div className = "card ml-6 col-md-4 offset-md-3 offset-md-2 mb-5 bg-light mt-2" >
                                <h3 style={{textAlign:'center'}}> TELEPHONE CONNECTION </h3>
                                <h3 style={{textAlign:'center'}}>Registration Form</h3>
                    
                                <div className = "card-body" >
                                    <form class="form">
                                       
                                    <div className = "form-group ">
                                            <label><b> Citizen Id:</b> </label>
                                            <input type="number" min="1" placeholder="Enter your citizen id" name="citizenId" className="form-control" 
                                                value={this.state.citizenId} onChange={this.handleChange}
                                                />
                                                
                                                <div className="text-danger">{this.state.errors.citizenId}</div>
                                               </div> 
                                        
                                       

                                        <div className = "form-group">
                                            <label><b> Citizen Name:</b> </label>
                                            <input type="text" name="citizenName" placeholder="Enter your name" value={this.state.citizenName} className="form-control" 
                                                 onChange={this.handleChange} />
                                        
                                        <div className="text-danger">{this.state.errors.citizenName}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label><b> Citizen Age:</b> </label>
                                            <input type="number" min="18"placeholder="Enter your age" name="citizenAge" className="form-control" 
                                                value={this.state.citizenAge} onChange={this.handleChange}
                                                />
                                                  <div className="text-danger">{this.state.errors.citizenAge}</div>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> <b> Citizen Address:</b> </label>
                                            <input type="text"placeholder="Enter your address" name="citizenAddress" className="form-control" 
                                                value={this.state.citizenAddress} onChange={this.handleChange}
                                            />
                                            <div className="text-danger">{this.state.errors.citizenAddress}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label><b> Citizen Mother Name:</b> </label>
                                            <input type="text" placeholder="Enter your mother's name" name="citizenMotherName" className="form-control" 
                                                value={this.state.citizenMotherName} onChange={this.handleChange}
                                                />
                                               <div className="text-danger">{this.state.errors.citizenMotherName}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label><b> Citizen Father Name: </b></label>
                                            <input type="text" placeholder="Enter your father's name" name="citizenFatherName" className="form-control" 
                                                value={this.state.citizenFatherName} onChange={this.handleChange}
                                               />
                                               <div className="text-danger">{this.state.errors.citizenFatherName}</div>
                                        </div>
                                        
                                    <div className="btn-group">
                                       
                                       <button className="btn btn-success" onClick={this.saveConnection}>Save</button><button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                       <button className="btn btn-dark" onClick={this.view.bind(this)} style={{marginLeft: "10px"}}>View</button>
                                       </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        );
    }
}

export default TelephoneConnectionComponent;
