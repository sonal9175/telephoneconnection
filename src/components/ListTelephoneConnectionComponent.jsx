import React, { Component } from 'react'
import TelephoneConnectionService from '../services/TelephoneConnectionService'
class ListTelephoneConnectionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                telephone: []
        }
       
    }
    componentDidMount(){
        TelephoneConnectionService.getAllConnections().then((res)=>{
           this.setState({telephone:res.data});
        });
    }
    render() {
        return (
            <div>
                <br></br>
                 <h2 className="text-center">Telephone Connection List</h2>
                 <div className = "row">
                    {/*<button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>*/}
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table ml-5 table-striped table-bordered">

                            <thead>
                                <tr>
                                
                                    <th>Citizen Id</th>
                                    <th>Citizen Name</th>
                                    <th>Citizen Age</th>
                                    <th>Citizen Address</th>
                                    <th>Citizen Mother Name</th>
                                    <th>Citizen Father Name</th>
                                    <th>Citizen Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.telephone.map(
                                        tele => 
                                        <tr key = {tele.citizenPhoneNumber}>
                                             <td> {tele.citizenId} </td> 
                                             <td> {tele.citizenName} </td>   
                                             <td> {tele.citizenAge}</td>
                                             <td> {tele.citizenAddress}</td>
                                             <td> {tele.citizenMotherName}</td>
                                             <td> {tele.citizenFatherName}</td>
                                             <td> {tele.citizenPhoneNumber}</td>
                                             <td>
                                                 {/*<button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>*/}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default ListTelephoneConnectionComponent;