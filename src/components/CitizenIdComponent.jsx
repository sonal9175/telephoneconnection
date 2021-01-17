import React, { Component } from 'react';
import CitizenServices from '../services/CitizenServices';
import register from './images/register.jpg';


class CitizenIdComponent extends Component {
    constructor(props) {
        super(props)
        
        
        this.state = {
            //citizenId: '',
            citizenName: '',
            citizenAge: '',
            citizenAddress: '',
            citizenEmail: '',
            citizenPhoneNumber: '',
            citizenFatherName: '',
            citizenMotherName: ''

        }

       /*/ this.changeCitizenIdHandler = this.changeCitizenIdHandler.bind(this);
        this.changeCitizenNameHandler = this.changeCitizenNameHandler.bind(this);
        this.changeCitizenAgeHandler = this.changeCitizenAgeHandler.bind(this);
        this.changeCitizenAddressHandler = this.changeCitizenAddressHandler.bind(this);
        this.changeCitizenEmailHandler = this.changeCitizenEmailHandler.bind(this);
        this.changeCitizenPhoneNumberHandler = this.changeCitizenPhoneNumberHandler.bind(this);
        this.changeCitizenFatherNameHandler = this.changeCitizenFatherNameHandler.bind(this);
        this.changeCitizenMotherNameHandler = this.changeCitizenMotherNameHandler.bind(this);
        this.saveCitizen = this.saveCitizen.bind(this);
    /*/
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        console.log(this.state)

         /*/ let citizen = { citizenId: this.state.citizenId,
               citizenName: this.state.citizenName, 
               citizenAge: this.state.citizenAge,
               citizenAddress: this.state.citizenAddress,
               citizenEmail: this.state.citizenEmail,
               citizenPhoneNumber: this.state.citizenPhoneNumber,
               citizenFatherName: this.state.citizenFatherName,
               citizenMotherName: this.state.citizenMotherName
              };
           /*/
           
           
          // console.log('citizen =>' + JSON.stringify(citizen));   
         
           CitizenServices.generateCitizenId(this.state).then(response =>{
            console.log(response)
            
                this.props.history.push('/home');
            
             })  
           }
           
            


    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    /*/
    changeCitizenNameHandler= (event) => {
        this.setState({citizenName: event.target.value});
    }
    changeCitizenAgeHandler= (event) => {
        this.setState({citizenAge: event.target.value});
    }
    changeCitizenAddressHandler= (event) => {
        this.setState({citizenAddress: event.target.value});
    }
    changeCitizenEmailHandler= (event) => {
        this.setState({citizenEmail: event.target.value});
    }
    changeCitizenPhoneNumberHandler= (event) => {
        this.setState({citizenPhoneNumber: event.target.value});
    }
    changeCitizenFatherNameHandler= (event) => {
        this.setState({citizenFatherName: event.target.value});
    }
    changeCitizenMotherNameHandler= (event) => {
        this.setState({citizenMotherName: event.target.value});
    }
    /*/
    cancel(){
        this.props.history.push('/home');
    }
  
    
    

    render() {
        
            
        return (
            <div style={{background: `url(${register})`, backgroundRepeat:"no-repeat", backgroundSize:"1200px" }}>
            <div>

            

                <div className = "container h-auto">
                    <div className = "row">
                        <div className = "card p-0 mb-0 col-md-5 offset-md-8 bg-info text-dark">
                        
                       
                        
                          <h3 className = "text-center" style={{backgroundColor: '#FFF200' }}><b>Citizen Registration Form</b></h3>
                    
                       
                    

                        <div className = "card-body">
                          
                            <form onSubmit = {this.submitHandler}>

                            <form action="" method="post" className="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Name</b>.</label>
                                    
                                    <input placeholder="Citizen Name" name="citizenName" className="form-control"  required=" "
                                      value={this.state.citizenName} onChange={this.onChange}/>  
                                      <div className="valid-feedback text-warning">Looks Good!</div> 
                                      <div className="invalid-feedback text-info">Please fill your name !</div>
                                 </div>
                                 
                               </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Age</b>.</label>
                                    <input placeholder="Citizen Age" name="citizenAge" className="form-control" required=" "
                                      value={this.state.citizenAge} onChange={this.onChange}/> 
                                      <div className="valid-feedback text-warning">Valid Age Filled</div> 
                                      <div className="invalid-feedback text-info">Please fill your age !</div>  
                                 </div>
                                 </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Address</b>.</label>
                                    <input placeholder="Citizen Address" name="citizenAddress" className="form-control" required=" "
                                      value={this.state.citizenAddress} onChange={this.onChange}/> 
                                      <div className="valid-feedback text-warning">Address Filled</div> 
                                      <div className="invalid-feedback text-info">Please fill your address !</div>  
                                 </div>
                                </form>

                                <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Email</b>.</label>
                                    <input placeholder="abc@yz.com" name="citizenEmail" className="form-control" required=" "
                                      value={this.state.citizenEmail} onChange={this.onChange}/>   
                                      <div className="valid-feedback text-warning">Valid Email Address Filled</div> 
                                      <div className="invalid-feedback text-info">Please fill your valid email address !</div>
                                 </div>
                                 </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Phone Number</b></label>
                                    <input placeholder="Citizen Phone Number" name="citizenPhoneNumber" className="form-control" required=" "
                                      value={this.state.citizenPhoneNumber} onChange={this.onChange}/> 
                                      <div className="valid-feedback text-warning">Valid Phone Number Filled</div> 
                                      <div className="invalid-feedback text-info">Please fill your valid phone number !</div>  
                                 </div>
                                 </form>


                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Father Name</b>.</label>
                                    <input placeholder="Citizen Father Name" name="citizenFatherName" className="form-control" required=" "
                                      value={this.state.citizenFatherName} onChange={this.onChange}/>   
                                      <div className="valid-feedback text-warning">Father's Name Filled</div> 
                                      <div className="invalid-feedback text-info">Please fill your father's name !</div>
                                 </div>
                                 </form>

                                 <form action="" class="was-validated">
                                 <div className = "form-group">
                                    <label><b>Citizen Mother Name</b>.</label>
                                    <input placeholder="Citizen Mother Name" name="citizenMotherName" className="form-control" required=" "
                                      value={this.state.citizenMotherName} onChange={this.onChange}/>   
                                      <div className="valid-feedback text-warning">Mother's Name Filled</div> 
                                      <div className="invalid-feedback text-info">Please fill your mothers's name !</div>
                                      
                                 </div>
                                 </form>
                                  
                                 <button  className="btn btn-success mt-1.5" style={{marginLeft: "25px"}} style={{backgroundColor: '#0000A0' }} ><b>Save</b></button>
                                 
                                 <button className="btn btn-danger mt-1.5" onClick={this.cancel.bind(this)}  style={{marginLeft: "15px"}} >Cancel</button>
                                 

                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    };
}

export default CitizenIdComponent