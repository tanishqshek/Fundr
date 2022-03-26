import * as React from "react";
import Creatable from 'react-select/creatable';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import { Component } from "react";

const theme = createTheme();

class FounderDashboard extends Component{
    render(){
        return(
            <h1 style={{color: "black", textAlign: "center"}} >You have successfully submitted your data!</h1>
        )
    }
}
export default FounderDashboard;