import {react, useState} from "react";
import logo from "./images/Q2L_Logo.svg";
import "./dashboard.css";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function StudentPopUp(props) {

    return(
        <div style = {{width: "800px", height: "200px", backgroundColor: "grey", marginLeft: "40px", marginBottom: "20px"}}>
            <p style = {{marginLeft: "40px", marginBottom: "40px", marginTop: "40px"}}>Name: {props.name}</p>
            <p style = {{marginLeft: "40px"}}>Email: {props.email}</p>
        </div>
    )
}

export default StudentPopUp