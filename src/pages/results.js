import React from "react";
import { ReactDOM } from "react";
import Header from "../components/Header";

export default function Results() {
  return (
    <>
      <h2 className="page-heading">Results</h2>
      <hr></hr>
      <br></br>
      <div className="graphs">
        <h1 className="page-heading"> Bar Chart Results</h1>
        <br></br>
        <div class="simple-bar-chart">
          <div class="item">
            <div class="label">PTI</div>
            <div class="value">60%</div>
          </div>

          <div class="item">
            <div class="label">PMLN</div>
            <div class="value">20%</div>
          </div>

          <div class="item">
            <div class="label">PPP</div>
            <div class="value">10%</div>
          </div>

          <div class="item">
            <div class="label">JI</div>
            <div class="value">5%</div>
          </div>

          <div class="item">
            <div class="label">MQM</div>
            <div class="value">5%</div>
          </div>
        </div>
        <h1 className="pie-head"> Pie Chart Results</h1>
        <div className="guide-box">
        <table>
    <thead>
      <tr>
        <th>Party</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>(PTI)</td>
        <td className="ybg" ><span class="color-cell" ></span> Yellow</td>
      </tr>
      <tr>
        <td>(PML-N)</td>
        <td className="rbg" ><span class="color-cell" ></span> Red</td>
      </tr>
      <tr>
        <td>(PPP)</td>
        <td className="gbg"><span class="color-cell"></span> Green</td>
      </tr>
      <tr>
        <td>(MQM)</td>
        <td className="pbg"><span class="color-cell"></span> Purple</td>
      </tr>
      <tr>
        <td>(JI)</td>
        <td className="bbg"><span class="color-cell" ></span> Blue</td>
      </tr>
    </tbody>
  </table>
        </div>
        <div className="pie"></div>
      </div>
    </>
  );
}
