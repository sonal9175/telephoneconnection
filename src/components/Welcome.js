import React from 'react';
import welcome from './images/welcome2.jpg';
import "../styles/styles.css"


function Welcome() {

    return (
    <div >
        <div class="card-header text-center bg-dark">
      <h4 class="text-light">Citizen Card Portal</h4>
     
      </div>
        <img class="img-fluid w-100 h-100"  src={welcome} ></img>
        <div class="content w-100" style={{position:"absolute", bottom:"-10%",backgroundColor: "rgba(0, 0, 0,0.5)",
        color: "#f1f1f1",padding: "20px", height:"100%" }}>
            <div style={{position:"relative", top:"30%",left:"25%"}}>
                <h3><i>  WELCOME to our Portal!  &nbsp; &nbsp; Start your journey with us...!</i></h3>

            <button className="page btn w-25 mt-5 button5"  onClick={()=>window.location.href="/login"}>User Login</button>
             <button className="page btn w-25 mt-5 button5" onClick={()=>window.location.href="/AdminLogin/:adminUserName/:adminPassword"}>Admin Login</button>
             </div>
        </div>
    </div>
        
    ) 
}

export default Welcome