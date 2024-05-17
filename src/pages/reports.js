import React from "react";
import { ReactDOM } from "react";
import Header from "../components/Header";

export default function Reports() {
  return (
    <>  
    <div class="reports-container">
    <h1>Election Results Report</h1>
    <div class="report-details">
      <p><strong>Year:</strong> 2024</p>
      <p><strong>Area:</strong> KPK Assembly</p>
      <p><strong>Date:</strong> January 1, 2024</p>
      <table class="results-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Party</th>
            <th>Votes</th>
            <th>Winner</th>
            <th>Loser</th>
            <th>Approved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Imran Khan</td>
            <td>PTI</td>
            <td>80</td>
            <td><input type="checkbox" checked disabled></input></td>
            <td><input type="checkbox" disabled></input></td>
            <td><input type="checkbox" checked></input></td>
          </tr>
          <tr>
            <td>Shebaz Sharif</td>
            <td>PMLN</td>
            <td>19</td>
            <td><input type="checkbox" disabled></input></td>
            <td><input type="checkbox" checked disabled></input></td>
            <td><input type="checkbox"></input></td>
          </tr>
          <tr>
            <td>Farooq Sattar</td>
            <td>MQM</td>
            <td>4</td>
            <td><input type="checkbox" checked disabled></input></td>
            <td><input type="checkbox" disabled></input></td>
            <td><input type="checkbox" checked></input></td>
          </tr>
          <tr>
            <td>Bilawal Bhutto</td>
            <td>PPP</td>
            <td>14</td>
            <td><input type="checkbox" checked disabled></input></td>
            <td><input type="checkbox" disabled></input></td>
            <td><input type="checkbox" checked></input></td>
          </tr>
          <tr>
            <td>Maulana Fazl-ur-Rehman</td>
            <td>JI</td>
            <td>30</td>
            <td><input type="checkbox" checked disabled></input></td>
            <td><input type="checkbox" disabled></input></td>
            <td><input type="checkbox" checked></input></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </>
  );
}
