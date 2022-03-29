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
    <br/>
  
  <div class="Login">
  <Typography variant="h4" color="black" align="center"> Let opportunity</Typography><br/>
  <Typography variant="h2" color="#5781DB " align="center"> come to you</Typography><br/>
  <br/>
  <a href="/signup"><div align="center"><Button variant="contained" disableElevation>Sign Up</Button></div></a> <br/>
  <div align="center"><Typography variant="body3" color="black"> New User? Create a Free Account</Typography></div><br/> <br/>
  </div>
  <div class="Login">
  <a href="/signin"><div align="center"><Button variant="contained" disableElevation>Sign In</Button></div></a> <br/>
  <div align="center"><Typography variant="body3" color="black"> Already Existing User</Typography></div><br/> <br/>
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
        <Box sx={{ fontWeight: 'bold', marginTop: 5, fontSize: 'h3.fontSize',paddingLeft:'5vw' }}> Our Mission </Box>
            <Typography  sx={{paddingLeft:'5vw'}}variant="body1" >
         In the current generation, where time is a very limited resource, it is very essential to have an application which will serve the purpose of matching the founders of upcoming startups with the investors in the most convenient approach.
        </Typography>
        </Grid>
    </Grid>

    <br/><br/><br/><br/><br/><br/><Divider /><br/>
    <Grid container>
          <Grid align="center" item xs={6}>


            <i class="fas fa-plane-departure fa-9x licon"></i>

          </Grid>
        <Grid item xs={6}>
        <Box sx={{ fontWeight: 'bold', marginTop: 5, fontSize: 'h3.fontSize',paddingLeft:'4vw' }}>How It Works</Box>
            <Typography sx={{paddingRight:'3vw',paddingLeft:'4vw'}}variant="body1" gutterBottom>
               Our application focuses on fulfilling this purpose with the help of a card-swiping feature. The founders will be able to post their pitch which will be displayed as cards to the investors and the investor can either left swipe to reject or right swipe to accept the match. Once there is a successful match, both the parties will be able to mutually interact with each other and go forward with the process.
        </Typography>
        <br/>
        <div class="Process">
  <a href="/process"><div align="center" style={{paddingRight:'3vw',paddingLeft:'4vw', color:"#5781DB", fontSize:'25px' }} gutterBottom>The Process</div></a> <br/>
  </div>  
        </Grid>
    </Grid>

    <br/><br/><br/><br/><br/><br/><Divider/><br/>
    <Grid container >
        <Grid item md={6}>
            <Box sx={{ fontWeight: 'bold', marginTop: 5, fontSize: 'h3.fontSize',paddingLeft:'5vw' }}>About Us</Box>
            <Typography sx={{ paddingLeft:'5vw' }} variant="body1" gutterBottom>
          
          <h2 style={{color:'black'}}> FRONTEND DEVELOPERS: </h2>
          <body1>Tanishq Shaikh <br/>
          Shreya Kasturia </body1><br/>
          <h2 style={{color:'black'}}>BACKEND DEVELOPERS: </h2>
          <body1> Sumeet Saini <br/>
          Dhairya Patel </body1><br/>
        </Typography>
        </Grid>
    </Grid>
   </Container> 
  <Footer/>
  </div>
  
  )  
}
