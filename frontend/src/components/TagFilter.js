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
import { TAGS } from "../assets/tags";
import { useState } from "react";
import axios from 'axios';

const theme = createTheme();
let companyTags = TAGS;

const colourStyles = {
  menuList: styles => ({
      ...styles,
      background: 'white'
  }),
  option: (styles, {isFocused, isSelected}) => ({
      ...styles,
      background: isFocused
          ? '#0001'
          : isSelected
              ? 'hsla(291, 64%, 42%, 1)'
              : undefined,
      zIndex: 1
  }),
  menu: base => ({
      ...base,
      zIndex: 100
  })
  }

export default function TagFilter() {

  const [finalTagsList, setfinalTagsList] = useState([]);
  // const [companyImageUrl, setCompanyImageUrl] = useState('');
  const [tempArray, setTempArray] = useState([]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  const appendTags = () => {
    let tempList = [];
    for(let e of tempArray){
      tempList.push(e.value);
      
    }
    // setCompanyTags(tempList);
    setfinalTagsList(tempList);
    console.log("companyTags", finalTagsList);
  };

  const handleChange = (event) => {
    console.log(event);
    setTempArray(event);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    appendTags();

    
    axios.post('/api/auth/posttags', { 
      "tags": finalTagsList.toString()
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status == 200) {
          console.log("API response: " ,res);
          routeChange();
        }
      
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };


  axios.get('/api/auth/getuserdata')
    .then(response =>{
      console.log("User data: " ,response.data.message[0].UserId);
    });
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh"}} id={styles["idea"]}
  spacing={0}
  direction="row"
  alignItems="center"
  justifyContent="center" style=  {{textAlign: "center", display: "flex", alignItems: "center" }} >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Typography component="h1" variant="h4" color={"black"}>
              Enter Tags
            </Typography>
            <Typography component="h1" variant="h6" color={"black"}>
              Enter tags to filter your cards.
            </Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '60ch' },
              }}
              noValidate
              autoComplete="off"
            >
            <Box
            sx={{
              my: 2,
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            </Box>

              <div  style={{m: 1, width: '61ch', paddingLeft: '10px', textAlign: 'left'}}>
                  <Creatable
                  options={companyTags}
                  isMulti
                  onChange={handleChange}
                  required
                  name="Tags"
                  fullWidth
                  label="Tags"
                  id="Tags"
                  placeholder="Select tags here"
                  styles={colourStyles}
                  />
              </div>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Grid container justifyContent="center">
              </Grid>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}