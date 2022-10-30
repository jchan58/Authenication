import {React, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./login.css";
import logo from "./images/Q2L_Logo.svg";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import {Routes, Route, useNavigate} from 'react-router-dom';
import DashBoard from "./dashboard.js";


function Signup(props) {

    const [password, setPassword] = useState("password");
    const handlePasswordVisibility = () => {
        if (password == "password") {
            setPassword("");
        } else {
            setPassword("password");
        }
    }
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate("/dashboard");
    }
    const navigateToLogin = () => {
        navigate("/");
    }
    return(

        
        <div style = {{display: "flex", justifyContent: "center", width: "100%", height: "100%", flexDirection: "column", justifyItems: "center"}}>
            <div style = {{width: "100%", height: "100px", backgroundColor: "rgba(46, 107, 162, 1)", display: "flex", flexDirection: "row"}}>
                <img src = {logo} alt ="" style = {{width: "40%", height: "100%", position: "static", margin: "auto"}}></img>
            </div>
            <div className="divider"></div>
            <div style = {{fontSize: "40px", margin: "auto", textAlign: "center", width: "100%"}}><b>Welcome to Quest2Learn</b></div>
            <div className="divider"></div>
            <div style = {{fontSize: "30px", margin: "auto", textAlign: "center", width: "100%"}}><b>Signup Here</b></div>
            <div className="divider"></div>
            <TextField label = {"Enter your email"} style = {{width: "600px", margin: "auto", textAlign: "center"}} variant = "outlined" InputProps = {{
                endAdornment: (
                    <InputAdornment position="start">
                        <EmailIcon />
                    </InputAdornment>
                ),}}
            ></TextField>
            <div className="divider"></div>
            <TextField label = {"Enter Username"} style = {{width: "600px", margin: "auto", textAlign: "center"}} variant = "outlined" InputProps = {{
                endAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                ),}}
            ></TextField>
            <div className="divider"></div>
            <TextField label = {"Enter Password"} style = {{width: "600px", margin: "auto", textAlign: "center"}} variant = "outlined" InputProps = {{
                endAdornment: (
                <InputAdornment position = "start" onClick = {handlePasswordVisibility}>
                    <KeyIcon/>
                </InputAdornment>
            ),}}
            type = {password}></TextField>
            <div className="divider"></div>
            <Button variant = {"contained"} style = {{width: "200px", margin: "auto", backgroundColor: "rgba(46, 107, 162, 1)"}} onClick = {() => {
                //put your code here to verify login
                navigateToDashboard()
            }}>Sign up</Button>
            <div className="smalldivider"></div>
            <Button variant = {"contained"} style = {{width: "200px", margin: "auto", backgroundColor: "rgba(46, 107, 162, 1)"}} onClick = {() => {
                //put your code here to verify login
                navigateToLogin()}}>Login</Button>

        </div>
    );
}


export default Signup;