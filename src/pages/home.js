import React from "react";
import { ReactDOM } from "react";
import Header from "../components/Header";
import userslogo from "../components/Icons/users-alt.svg"
import reports from "../components/Icons/reports.svg"
import results from "../components/Icons/results.svg"
import voters from "../components/Icons/monitor.svg"
import Logoutimg from "../components/Icons/sign-out-alt.svg"


export default function Home(){

    const manageUsers =()=>{
        window.location.href = "/manage";   
    } 
    const showReports =()=>{
        window.location.href = "/reports"
    }
    const showResults =()=>{
        window.location.href = "/results"
    }
    const monitorVoters =()=>{
        window.location.href = "/monitor"
    }
    const logitout =()=>{
        window.location.href = "/logout"
    }
    return (
        <>
        <div  className="User-heading"><h1>Administrator Portal</h1><p>How we may help you?</p></div><div className="my-tasks">
            <button onClick={manageUsers} className="btn"><div>
                <img src={userslogo} alt="users" width="35" height="40"></img>
                <h4>Manage Users</h4>
            </div></button>
            <button onClick={showReports} className="btn"><div>
                <img src={reports} alt="users" width="35" height="40"></img>
                <h4>Generate Reports</h4>
            </div></button>
            <button onClick={showResults} className="btn slide"><div>
                <img src={results} alt="users" width="35" height="40"></img>
                <h4>Election Results</h4>
            </div></button>
            <button onClick={monitorVoters} className="btn"><div>
                <img src={voters} alt="users" width="35" height="40"></img>
                <h4>Monitor Voters</h4>
            </div></button>
            <button onClick={logitout} className="btn"><div>
                <img src={Logoutimg} alt="users" width="35" height="40"></img>
                <h4>Log out</h4>
            </div></button>
        </div>
        </>
    )
}