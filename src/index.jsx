import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import App from "./App"
import Sidenav from "./components/sidenav";


ReactDOM.render(<Header/>,document.getElementById("root"));
ReactDOM.render(<Sidenav/>,document.getElementById("Secondroot"));
ReactDOM.render(<App/>,document.getElementById("content"));