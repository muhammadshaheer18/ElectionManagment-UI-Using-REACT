import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Logout from "./pages/logout"
import Manage from "./pages/manage"
import Monitor from "./pages/monitor"
import Reports from "./pages/reports"
import Results from "./pages/results"
import Signup from './pages/signup';

export default function App(){
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Signup/>}/>
                <Route index element = {<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/manage" element={<Manage/>}/>
                <Route path="/monitor" element={<Monitor/>}/>
                <Route path="/reports" element={<Reports/>}/>
                <Route path="/results" element={<Results/>}/>

            </Routes>
        </BrowserRouter>
        </div>
    )

}