import React, { Component } from "react";
import BankAccountService from "../services/BankAccountService";


class BankAccountComponent extends Component {

    constructor(props) {
        super(props);


        this.state = {

            accountType: "",
            accountHolderName: "",
            bankName: "",
            branchName: "",
            citizenPhoneNumber: ""

        }
    }

    
    changeAccountHolderNameHandler = (e) => {
        this.setState({
            accountHolderName: e.target.value
        })
    }
    changeCitizenPhoneNumberHandler = (e) => {
        this.setState({
            citizenPhoneNumber: e.target.value
        })
    }

    changeBankNameHandler = (e) => {
        this.setState({
            bankName: e.target.value
        })
    }

    changeBranchNameHandler = (e) => {
        this.setState({
            branchName: e.target.value
        })
    }

    changeAccountTypeHandler = (e) => {
        this.setState({
            accountType: e.target.value
        })
    }

    
   stopSubmission = (e) => {
        e.preventDefault();
        let account = {
            
            accountType: this.state.accountType,
            accountHolderName: this.state.accountHolderName,
            bankName: this.state.bankName,
            branchName: this.state.branchName,
            citizenPhoneNumber: this.state.citizenPhoneNumber
        }

        BankAccountService.createNewAccount(account)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }
       
    

    cancel(){
        this.props.history.push('/home');
    }



    render() {
        return (
             <div>
                 
               {/*  <div className="row">
                    <div class="card ml-6 col-md-4 offset-md-3 offset-md-2 mt-5 mb-5 bg-info"> */}
                
                    {/* <div style={{backgroundImage:`url(${account})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}> */}
                    
                

                            <div class="p-3 mb-2 bg-primary text-white">
                <div className="container mt-2">
                <h3 style={{textAlign:'center'}}> Account Creation </h3>
                    <marquee><h4>Please Fill the Details for creating bank account</h4></marquee>
                    

                    <div className = "card-body ">
                    <form method="POST" onSubmit={this.stopSubmission}>

                        

                        <div class="p-3 mb-2 bg-light text-dark">
                        
                            <label><b>Enter your name:</b></label>
                            <input
                                type="text"
                                value={this.state.accountHolderName}
                                name="accountHolderName"
                                className="form-control"
                                placeholder="Please enter your first name and last name"
                                onChange={this.changeAccountHolderNameHandler}
                            />
                        </div>

                        

                        <div class="p-3 mb-2 bg-light text-dark">
                            <label><b>Enter the type of account you want to create:</b></label>
                            <input
                                type="text"
                                value={this.state.accountType}
                                name="accountType"
                                className="form-control"
                                placeholder="Savings, Current or Salary"
                                onChange={this.changeAccountTypeHandler}
                                required=""
                            />
                        </div>


                        <div class="p-3 mb-2 bg-light text-dark">
                            <label><b>Bank Name:</b></label>
                            <input
                                type="text"
                                value={this.state.bankName}
                                name="bankName"
                                className="form-control"
                                placeholder="Please enter the name of the Bank"
                                onChange={this.changeBankNameHandler}
                            />
                        </div>

                        <div class="p-3 mb-2 bg-light text-dark">
                            <label><b>Branch Name:</b></label>
                            <input
                                type="text"
                                value={this.state.branchName}
                                name="branchName"
                                className="form-control"
                                placeholder="Please enter the name of the Branch"
                                onChange={this.changeBranchNameHandler}
                            />
                        </div>

                        <div class="p-3 mb-2 bg-light text-dark">
                            <label><b>Mobile:</b></label>
                            <input
                                type="number"
                                value={this.state.citizenPhoneNumber}
                                name="citizenPhoneNumber"
                                className="form-control"
                                placeholder="9876543210"
                                onChange={this.changeCitizenPhoneNumberHandler}
                            />
                        </div>
                        
                        <button class="btn btn-success mt-2"><i>Submit your details</i></button>
                        <button className="btn btn-danger mt-2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><i>Cancel</i></button>
                    </form>
                    </div>
                {/* </div> */}
                </div>
              
                
                
</div>
            </div>
        )
    }
}



export default BankAccountComponent