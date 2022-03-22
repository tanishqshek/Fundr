import React, {Component} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Navigate } from 'react-router';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import img1 from './img1.jpeg';
import img2 from "../assets/img2.jpeg";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import BusinessIdea from './BusinessIdea';
import axios from 'axios';
// import { renderMatches } from "react-router-dom";

const theme = createTheme();

class SignUpComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        // userToken: null,
        fname: "",
        lname: "",
        linkedin: "",
        email: "",
        password: "",
        mobile: "",
        typeOfUser: "",
        isSignedUp: false
    };
};

  handleChange (event) {
    // this.setState({ 
      // fname: event.target.value,
      // lname: event.target.value,
      // linkedin: event.target.value,
      // email: event.target.value,
      // password: event.target.value,
      // typeOfUser: event.target.value});

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit (event)  {
    event.preventDefault();
    
    const user = {
      "Name": this.state.fname,
      "LastName": this.state.lname,
      "Username": this.state.email,
      "Password": this.state.password,
      "Mobile":   this.state.mobile,
      "UserType": this.state.typeOfUser
    };
    // console.log(user);


    axios.post('/api/signup', { 
      "Name": this.state.fname,
      // "LastName": this.state.lname,
      "Username": this.state.email,
      "Password": this.state.password,
      "Mobile":   this.state.mobile,
      "UserType": this.state.typeOfUser
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
          this.setState({ isSignedUp: true });
          localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
        }
      
      })
      .catch(function (error) {
        console.log(error.toJSON());
        // alert(error);
        if(error.response.status == 400)
          alert("Please enter all the required information");
      });
  }

  
  render(){

    if (this.state.isSignedUp) {
      // redirect to home if signed up
      return <Navigate to = {{ pathname: "/signin" }} />;
    }

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
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                autoComplete="fname"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lname"
                label="Last Name"
                type="lname"
                id="lname"
                autoComplete="lname"
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="linkedin"
                label="LinkedIn Profile Link"
                type="linkedin"
                id="linkedin"
                autoComplete="linkedin"
              />
              {/* <select id = "myList" margin= "normal" required>  
                <option margin = "normal"> Select Type</option>  
                <option> Investor </option>  
                <option> Founder</option>  
                </select> 
                 */}

              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="mobile"
                label="Mobile Number"
                type="number"
                id="mobile"
                autoComplete="mobile"
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="pass1"
                label="Password"
                type="password"
                id="pass"
                // onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Re-enter Password"
                type="password"
                id="password"
                onChange={this.handleChange}
              />
              <Select
                margin="normal"
                required
                fullWidth
                displayEmpty
                name="typeOfUser"
                value={this.state.typeOfUser}
                defaultValue="Investor"
                label="Select Founder or investor*"
                floatingLabelText="Founder or Investor"
                onChange={this.handleChange}
              >
                <MenuItem value="Founder" primaryText="Founder" selected>
                  Founder
                </MenuItem>
                <MenuItem value="Investor" primaryText="Investor">
                  Investor
                </MenuItem>
              </Select>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={this.handleSubmit}
              >
                  Register
                {/* </Link> */}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
}

export default SignUpComponent;