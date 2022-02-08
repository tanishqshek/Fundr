import * as React from 'react';
import vid from '../assets/bgvid.mp4';
import {Button,Grid,Container,Typography,Box,Divider} from '@mui/material';
import Footer from './Footer';
export default function Login(){
  return(
  <div>
  <video autoPlay loop muted id="video" style={{
                aspectRatio: 1,
                width: "100%"
            }}>
  <source src={vid}></source>
  </video>
  <Container>
  <div class="Login">
      <Typography variant="h3" color="black"> Get Started</Typography><br/>
      <Typography variant="h5" color="black"> Sign Up/ Sign In</Typography><br/> <br/>
  <a href="/signup"><Button variant="contained" disableElevation>Sign Up</Button></a> <br/>
  <Typography variant="body3" color="black"> New User? Create a Free Account</Typography><br/> <br/>
  </div>
  <div class="Login">
  <a href="/signin"><Button variant="contained" disableElevation>Sign In</Button></a> <br/>
  <Typography variant="body3" color="black"> Already Existing User</Typography><br/> <br/>
  </div>
  </Container>
  <Box
        sx={{
          width: 1,
          height: 50,
          backgroundColor:'black',   
          marginTop:'10vh',
          zIndex:-1
          
        }}
      />
   <Container maxWidth="lg">
       <br/>
    <Grid container  >
        <Grid item xs={6}>
        <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h3.fontSize' }}>Our Mission</Box>
         <Typography variant="body1" gutterBottom>
         In the current generation, where time is a very limited resource, it is very essential to have an application which will serve the purpose of matching the founders of upcoming startups with the investors in the most convenient approach.
        </Typography>
        </Grid>
    </Grid>

    <br/><br/><br/><br/><br/><br/><Divider /><br/>
    <Grid container>
        <Grid item xs={6}>
        <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h3.fontSize' }}>How It Works</Box>
         
         <Typography variant="body1" gutterBottom>
         Our application focuses on fulfilling this purpose with the help of a card-swiping feature. The founders will be able to post their pitch which will be displayed as cards to the investors and the investor can either left swipe to reject or right swipe to accept the match. Once there is a successful match, both the parties will be able to mutually interact with each other and go forward with the process.
        </Typography>
        </Grid>
    </Grid>

    <br/><br/><br/><br/><br/><br/><Divider/><br/>
    <Grid container >
        <Grid item xs={6}>
        <Box sx={{ fontWeight: 'bold', m: 1,fontSize: 'h3.fontSize' }}>About Us</Box>
         <Typography variant="body1" gutterBottom>
          Tanishq Shaikh <br/>
          Shreya Kasturia <br/>
          Sumeet Saini <br/>
          Dhairya Patel <br/>
        </Typography>
        </Grid>
    </Grid>
   </Container>  
  <Footer/>
  </div>
  )  
}
