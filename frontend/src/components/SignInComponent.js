

import React, {Component} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import img1 from './img1.jpeg';
// import { renderMatches, useNavigate } from "react-router-dom";
import img2 from "../assets/img2.jpeg";
// import Dashboard from "./DashboardComponent";
import { Navigate } from "react-router-dom";
import axios from 'axios';
import home from "./DashboardComponent";
import Main from "./MainComponent";

const theme = createTheme();
const temp = false;

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        email: "",
        password: "",
        isSignedIn: false,
        tagSet: false,
        userType: "",
        companyData: ""
    };
};

    handleChange (event) {

      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/home`;
  //   navigate(path);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // }

  handleSubmit (event)  {
    event.preventDefault();

    axios.post('/api/signin', { 
      
      "Username": this.state.email,
      "Password": this.state.password,
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status == 200) {
          this.setState({ isSignedIn: true });
          localStorage.setItem("isSignedIn",true);
          // this.setState({ isSignedIn: true }, function() {
          //   console.log("signin: ",this.state.isSignedIn);
          //   <Main data={this.state.isSignedIn}/>
          // });
          // userType = localStorage.getItem(); 
          // console.log("Local: ", localStorage.getItem(this.state.email));
          this.setState({userType : localStorage.getItem(this.state.email)})// after signing up, set the state to true. This will trigger a re-render
          console.log("User: " , localStorage);
          // console.log(isSignedIn)
          // axios.get('/api/auth/getuserdata')
          // .then(response =>{
          //   console.log("User data: " ,response.data.message[0].UserId);
          //   if(response.data.message[0].UserId !== undefined || response.data.message[0].UserId !== ""){
          //     // <Navigate to="/home"/>;
          //     // this.setState({ tagSet: true });              

          //     this.setState({ tagSet: true }, function() {
          //       console.log("Mystate: ",this.state.tagSet);
          //     });
          //     // console.log("Mystate: ", this.state.tagSet);
          //     // return <Navigate to={home}/>
          //     // con
              
          //   }

          //   // if(this.state.tagSet == true){

          //   // }
          //   // else{<Navigate to="/tagfilter"/>;}
          // });
        }
      
      })
      .catch(function (error) {
        // console.log(error.toJSON());
        alert(error);
      });
  }

render(){

  // console.log(this.userType);
  if (this.state.userType == "Investor") {
    
    return <Navigate to = {{ pathname: "/tagfilter" }} />;
      
  }
  else if (this.state.userType == "Founder"){
    return <Navigate to = {{ pathname: "/businessidea" }} />;
  }
  else{
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img2})`,
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5" color={"black"}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              // onSubmit={this.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.handleSubmit}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
}
}

export default Login;