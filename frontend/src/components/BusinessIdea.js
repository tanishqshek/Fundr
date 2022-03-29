
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
import { useState, useEffect } from "react";
import axios from 'axios';
const theme = createTheme();

const businesscategory = [
  { label: 'Automotive', value: 'Automotive' },
  { label: 'Banking', value: 'Banking' },
  { label: 'Financial Services', value: 'Financial Service' },
  { label: 'Cement', value: 'Cement' },
  { label: 'Chemicals', value: 'Chemicals' },
  { label: 'Conglomerates', value: 'Conglomerates' },
  { label: 'Consumer Durables', value: 'Consumer Durables' },
  { label: 'Consumer Non-Durables', value: 'Consumer Non-Durables' },
  { label: 'Engineering', value: 'Engineering' },
  { label: 'Food & Beverage', value: 'Food & Beverage' },
  { label: 'Technology', value: 'Technology' },
  { label: 'Manufacturing', value: 'Manufacturing' },
  { label: 'Media', value: 'Media' },
  { label: 'Metals & Mining', value: 'Metals & Mining' },
  { label: 'Oil & Gas', value: 'Oil & Gas' },
  { label: 'Pharmaceuticals', value: 'Pharmaceuticals' },
  { label: 'Real Estate', value: 'Real Estate' },
  { label: 'Services', value: 'Services' },
  { label: 'Telecom', value: 'Telecom' },
  { label: 'Tobacco', value: 'Tobacco' },
  { label: 'Utilities', value: 'Utilities' },
  { label: 'Miscellaneous', value: 'Miscellaneous' }
];

<Creatable
  options={businesscategory}
/>

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

export default function BusinessIdea() {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);
  const [imageUrl, setImageUrl] = useState(null);
  const [id, companyName, description, companyImageUrl] = useState(null);
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/founderdash`;
    navigate(path);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     companyname: data.get("companyname"),
  //     tags: data.get("tags"),
  //     idea: data.get("idea"),
  //   });
  // };
  const handleChange  = (event) => {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // console.log(user);


    axios.post('/api/postpitch', { 
      "Id": this.state.id,
      // "LastName": this.state.lname,
      "CompanyName": this.state.companyName,
      "Description": this.state.description,
      "ImageUrl":   this.state.companyImageUrl     
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status === 200) {
          // this.setState({ isSignedUp: true });
          // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
          // this.routeChange();
        }
      
      })
      .catch(function (error) {
        console.log(error.toJSON());
        // alert(error);
        if(error.response.status == 400)
          alert("Please enter all the required information");
      });
  };

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
              Business Idea
            </Typography>
            <Typography component="h1" variant="h6" color={"black"}>
              Give your company a name, enter the related tags and write a brief decription of your business idea.
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
              <TextField style=  {{textAlign: "center", display: "flex", alignItems: "center" }}
                required
                fullWidth
                id="companyname"
                label="Company Name"
                name="companyname"
                autoComplete="companyname"
                placeholder="Enter your company name"
                autoFocus
              />
              <div  style={{m: 1, width: '61ch', paddingLeft: '10px', textAlign: 'left'}}>
                  <Creatable
                  options={businesscategory}
                  isMulti
                  onChange={(opt, meta) => console.log(opt, meta)}
                  required
                  name="tags"
                  fullWidth
                  label="Tags"
                  id="tags"
                  placeholder="Select tags for investors to find you"
                  styles={colourStyles}
                  />
              </div>
              <TextField
                required
                name="idea"
                fullWidth
                label="Business Idea"
                id="idea"
                rows = {10}
                maxRows={10}
                placeholder="Enter your business idea in not more than 10 lines"
                multiline              
                />
              <input 
                accept="image/*" 
                type="file" 
                id="select-image"
                style={{ display: 'none' }}
                onChange={e => setSelectedImage(e.target.files[0])}
                
              />
              <label htmlFor="select-image">
                <Button variant="contained" color="primary" component="span">
                  Upload Image
                </Button>
              </label>
              {/* <div>{imageUrl && selectedImage && (
                <Box mt={2} textAlign="center">
                  <div>Image Preview:</div>
                  <img src={imageUrl} alt={selectedImage.name} height="100px" />
                </Box>
              )}
              </div> */}
              <br></br>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={handleSubmit}
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