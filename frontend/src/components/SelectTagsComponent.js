import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import styles from "./dashboard.module.css";
import { Component } from "react";
import Button from "@mui/material/Button";
import { TAGS } from "../assets/tags";
import axios from 'axios';
import CreatableSelect from 'react-select/creatable';
import { Navigate } from "react-router-dom";
import { withRouter } from "./withRouter";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const theme = createTheme();
// const navigate = useNavigate();
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

class SelectTagsComponent extends Component{
  // const navigate = useNavigate();

  constructor(props) {
    super(props);
    this.appendTags = this.appendTags.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      lastDirection: "",
      tempArray: [],
      finalList: [],
      redirect:false,
        // isSignedIn: false,
        userType: "",
        tempList: [],
        tagSet: false
    };
};


  appendTags(){
    let tempList = [];
    for(let e of this.state.tempArray){
      tempList.push(e.value);
      
    }
    // setCompanyTags(tempList);
    this.setState({ finalList: tempList});
    console.log("companyTags", this.finalList);
  }
  handleChange(event) {
    console.log(event);
    this.setState({ tempArray: event})

  };

  // routeChange (){
  //   let path = `/home`;
  //   navigate(path);
  // };

  handleSubmit(event) {
    console.log("Hello");
    event.preventDefault();
    this.setState({ tagSet: true});
    
    this.appendTags();
    // this.state.redirect && <Navigate to='/home' replace={true} />
<<<<<<< HEAD
    // axios.post('/api/auth/posttags', { 
    //   // "Id": this.state.id,
    //   // "LastName": this.state.lname,
    //   "tags": this.state.finalList.toString()

    // })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     if (res.status == 200) {
    //       // this.setState({ isSignedUp: true });
    //       // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render

    //     }
=======
    axios.post('/api/auth/posttags', { 
      // "Id": this.state.id,
      // "LastName": this.state.lname,
      "tags": this.state.finalList.toString()
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status == 200) {
          // this.setState({ isSignedUp: true });
          // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
          // routeChange();
          console.log("API response: " ,res);
        }
>>>>>>> b59d737 (working postTags call)
      
      })
      .catch(function (error) {
        console.log(error.toJSON());
        // alert(error);
        // if(error.response.status == 400)
        //   alert("Please enter all the required information");
      });
    // this.props.navigate('/home');

  };

    render(){
      
        return(
            <ThemeProvider theme={theme}>
            <CreatableSelect
                  options={companyTags}
                  isMulti
                  // required
                  name="Tags"
                  onChange={this.handleChange}

                  fullWidth
                  label="Tags"
                  id="Tags"
                  placeholder="Select tags"
                  styles={colourStyles}
                  />
                  <Button

                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.handleSubmit}
                // onClick={()=> this.props.history.push('/signup')}
              >
                Submit
              </Button>
              {/* <Link to="/home" className="btn btn-primary">Submit</Link> */}

                  </ThemeProvider>
                  
        )
        
    }
    
}

export default SelectTagsComponent;