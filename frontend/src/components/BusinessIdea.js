
import * as React from "react";
import CreatableSelect from 'react-select/creatable';
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
import { TAGS } from "../assets/tags";
import { Buffer } from "buffer";
// import imageToBase64 from "image-to-base64";
const theme = createTheme();

const businesscategory = TAGS;

<CreatableSelect
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
  const [selectedImage, setSelectedImage] = useState('');
  // console.log(selectedImage);
  const [imageUrl, setImageUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');
  const [companyTags, setCompanyTags] = useState([]);
  const [companyImageUrl, setCompanyImageUrl] = useState('');
  const [tempArray, setTempArray] = useState([]);

  //
  const [images, setImages] = useState('');
  // const [imageURLs, setImageURLs] = useState([]);
  const [base64File, setBase64URL] = useState('');

  const [postData, setPostData] = useState({ 
    createdBy : 'user1', 
    content : '', tag : '', 
    attachments : ''
});  

  const handleFileInputChange = e => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = function() {
        setBase64URL(reader.result);
        // setPostData({...postData, attachments : reader.result })
        setImages(reader.result);

    console.log('result', reader.result);
    console.log("file result", base64File);
    }
    if(e.target.files[0]){
    reader.readAsDataURL(e.target.files[0]);
    console.log('reader',reader);
    }
  };


  function onImageChange(e){
    setImages(e.target.files[0]);
    
  }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/founderdash`;
    navigate(path);
  };

  
  const appendTags = () =>{
    let tempList = [];
    for(let e of tempArray){
      // setCompanyTags([...companyTags, e.value]);
      tempList.push(e.value);
      
    }
    setCompanyTags(tempList);
    // console.log("Temp list: ", tempList);
    // console.log("Company tags: ", companyTags);
  }
  const handleChange  = (event) => {
    console.log(event);
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;

    // setCompanyTags(companyTags.push(event[0].value));
    // setCompanyTags([...companyTags, event[0].value])
    setTempArray(event);
    console.log("tempArray: ",tempArray);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("image: ", images);
    // return new Promise((resolve, reject) => {
    //   getBase64(images, data => resolve({ data: { link: data } }));
    // });

    // let stringbase = Buffer.from(stringToBase64, 'base64').toString('utf-8');
    // console.log("Decoded ", stringbase);
    appendTags();
    // setTimeout(1000);
    // console.log("handle company", companyTags);
    // console.log("selected image", selectedImage);
    // routeChange();
  
    // console.log(user);


    axios.post('/api/auth/postpitch', { 
      // "Id": this.state.id,
      // "LastName": this.state.lname,
      "company_name": companyName,
      "tags": companyTags.toString(),
      "description": description,
      "image_url":   images   
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.status == 200) {
          // this.setState({ isSignedUp: true });
          // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
          routeChange();
        }
      
      })
      .catch(function (error) {
        console.log(error.toJSON());
        
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
                // required
                fullWidth
                id="companyname"
                label="Company Name"
                name="companyname"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                autoComplete="companyname"
                placeholder="Enter your company name"
                autoFocus
              />
              <div  style={{m: 1, width: '61ch', paddingLeft: '10px', textAlign: 'left'}}>
                {/* {console.log("Company tags", companyTags) } */}
                  <CreatableSelect
                  options={businesscategory}
                  isMulti
                  // required
                  name="Tags"
                  // value={companyTags}
                  // {console.log("Event Message", )}
                  onChange={handleChange}
                  fullWidth
                  label="Tags"
                  id="Tags"
                  placeholder="Select tags for investors to find you"
                  styles={colourStyles}
                  />
              </div>
              <div  style={{m: 1, width: '61ch', paddingLeft: '10px', textAlign: 'left'}}>
              <TextField
                // required
                name="Description"
                fullWidth
                label="Business Idea"
                id="idea"
                value={description}
                onChange={e => setDescription(e.target.value)}
                
                rows = {10}
                maxRows={10}
                placeholder="Enter your business idea in not more than 10 lines"
                multiline              
                />
                </div>
                {/* <TextField style=  {{textAlign: "center", display: "flex", alignItems: "center" }}
                // required
                fullWidth
                id="companyImageUrl"
                label="Image Url"
                name="companyImageUrl"
                value={companyImageUrl}
                onChange={e => setCompanyImageUrl(e.target.value)}
                autoComplete="companyImageUrl"
                placeholder="Enter image URL"
                autoFocus
              /> */}
              {/* <input 
                accept="image/*" 
                type="file" 
                id="select-image"
                style={{ display: 'none' }}
                value={selectedImage}
                // onChange={(companyTags) => { this.setState({ companyTags }) }}
                onChange={e => setSelectedImage(e.target.files[0])}
                // onChange={(event) => {
                //   // console.log(event.target.files[0].toString());
                //   setSelectedImage(event.target.files[0]);
                // }}
                
              /> */}
              <input type="file" accept="image/*" onChange = {handleFileInputChange} style={{ display: 'none' }} id="select-image"/>
              {/* {<img src={images} />} */}
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
