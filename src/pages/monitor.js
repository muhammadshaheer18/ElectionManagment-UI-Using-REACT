import React from "react";
import { ReactDOM } from "react";
import Header from "../components/Header";

export default function Monitor() {
  return (
    <>
      <div class="mcontainer">
          <h1 className="page-heading">Voters Details</h1>
          <table class="voters-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>CNIC</th>
                <th>Contact</th>
                <th>Election Sector</th>
                <th>Verification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ayesha Khan</td>
                <td>42101-9117505-2</td>
                <td>0345-1234567</td>
                <td>Islamabad North</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Usman Ali</td>
                <td>35201-8765432-1</td>
                <td>0300-9876543</td>
                <td>Rawalpindi West</td>
                <td>Not Verified</td>
              </tr>
              <tr>
                <td>Fatima Ahmed</td>
                <td>42101-6543210-9</td>
                <td>0312-3456789</td>
                <td>Lahore South</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Mohammad Aslam</td>
                <td>35202-2345678-9</td>
                <td>0321-9876543</td>
                <td>Karachi East</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Saima Bibi</td>
                <td>41203-9876543-2</td>
                <td>0333-7654321</td>
                <td>Faisalabad West</td>
                <td>Not Verified</td>
              </tr>
              <tr>
                <td>Bilal Khan</td>
                <td>32104-7654321-0</td>
                <td>0302-8765432</td>
                <td>Peshawar Central</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Farah Naz</td>
                <td>45302-2345678-9</td>
                <td>0315-3456789</td>
                <td>Quetta North</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Imran Haider</td>
                <td>31203-9876543-2</td>
                <td>0344-6543210</td>
                <td>Multan West</td>
                <td>Verified</td>
              </tr>
              <tr>
                <td>Nadia Khattak</td>
                <td>35201-6543210-9</td>
                <td>0320-7654321</td>
                <td>Sialkot Central</td>
                <td>Not Verified</td>
              </tr>
              <tr>
                <td>Ali Hassan</td>
                <td>32102-8765432-1</td>
                <td>0306-9876543</td>
                <td>Gujranwala South</td>
                <td>Verified</td>
              </tr>
            </tbody>
          </table>
        </div>
      
    </>
  );
}
