import {react, useState} from "react";
import logo from "./images/Q2L_Logo.svg";
import "./dashboard.css";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import StudentPopUp from "./studentPopUp.js";

function DashBoard(props) {
    return(
        <div style = {{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
            <div style = {{width: "100%", height: "100px", backgroundColor: "rgba(46, 107, 162, 1)", display: "flex", flexDirection: "row"}}>
                <img src = {logo} alt ="" style = {{width: "40%", height: "100%", position: "static", margin: "auto"}}></img>
            </div>
            <div className = "divider"></div>
            <Button endIcon = {<AddIcon/>} style = {{width: "400px", height: "80px", marginLeft: "40px"}} variant = "contained" sx = {{fontSize: 20}}>
                Add Student
            </Button>
            <p className = "title"><b>Students</b></p>
            <StudentPopUp email = "TEST EMAIL 1" name = "TEST NAME 1"/>
            <StudentPopUp email = "TEST EMAIL 2" name = "TEST NAME 2"/>
            <StudentPopUp email = "TEST EMAIL 3" name = "TEST NAME 3"/>
            <StudentPopUp email = "TEST EMAIL 4" name = "TEST NAME 4"/>
        </div>

    );
}

export default DashBoard