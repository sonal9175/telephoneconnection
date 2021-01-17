import React, { Component } from 'react';

class SuccessTelephoneConnectionComponent extends Component {

    view(){
        this.props.history.push('/list');
    }
    render() {
        return (
            <div>
            <br></br>
                 <div className = "container">
                 <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3  bg-success" >
                 <h3>-SUCCESS-</h3>
                 <h3>Telephone Connection is established successfully!</h3>
                    
                    <div className = "card-body">
                    <button className="btn btn-light" onClick={this.view.bind(this)} style={{marginLeft: "10px"}}>View</button>
                        </div>
                        </div>
                        </div>
                 </div>
            </div>
        );
    }
}

export default SuccessTelephoneConnectionComponent;