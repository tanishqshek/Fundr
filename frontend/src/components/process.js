 import React from 'react'
 import { Container, Paper,Box } from "@mui/material"
 import PropTypes from 'prop-types';
 import Grid from '@mui/material/Grid';
 import Typography from '@mui/material/Typography';
 import Tabs from '@mui/material/Tabs';
 import Tab from '@mui/material/Tab';
 import Header from '../assets/Header.png';
 import Search from '../assets/search.jpeg';
 import Interview from '../assets/interview.png';
 import Job from '../assets/job.jpeg';
 import Footer from './Footer';

 function TabPanel(props) {
     const { children, value, index, ...other } = props;

     return (
       <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
       >
         {value === index && (
           <Box sx={{ p: 3 }}>
             <Typography>{children}</Typography>
           </Box>
         )}
       </div>
     );
   }

   TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.number.isRequired,
     value: PropTypes.number.isRequired,
   };

   function a11yProps(index) {
     return {
       id: `simple-tab-${index}`,
       'aria-controls': `simple-tabpanel-${index}`,
     };
   }

 export default function Overview() {

     const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   return (
     <div>

     <div className="overview">
       <img src={Header} style={{
                aspectRatio: 1,
                width: "100%"
            }}/>
                                 

       </div>
       <h1 style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontSize: '80px',
                          color: 'black'
                        }}>The Process</h1>
     <br/><br/>

     <Container  className="Bacc" maxWidth="lg">
       <Grid container sx={{marginTop:"50vh"}} >

         <Grid sx={{marginTop:"-50vh"}} item md={30}  align= 'center'>
           <Box sx={{ width: '60%'}} align= 'center'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> 
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
           <Tab label="The Search" {...a11yProps(0)}/>
           <Tab label="The Interview " {...a11yProps(1)} />
           <Tab label="The Job" {...a11yProps(2)} />
         </Tabs>
       </Box>

       <TabPanel value={value} index={0}>
       <h1 style={{color:'black', position:'relative'}}> The Search</h1>
       <h2 style={{color:'black' , position:'relative'}}> Why is searching for an online job is important? </h2>
       <img src={Search}></img><br/>
       The whole process of looking for a job is a great exercise in self-awareness. As you craft your resume, go on interviews, research companies, etc., you’re trying to find the fit that will make the most of your strengths, align with your values and help your grow in your career. If you’re being mindful of all that as you pursue your next job, you’ll not only find the right environment, but you’ll work with people and on projects that allow you to use your best skills and abilities
       <br/><br/> You can’t really find the perfect job if you don’t know what you’re looking for, right?  You may already know in what area of hospitality you’d like to work, but that really isn’t enough to find a job that’s really fulfilling. You need to understand what motivates you, what your goals are, what kind of work environment you want and what qualities you want to develop.
       <br/><br/>When you have a clear understanding of what strengths you bring to the job, you’re better able to work on things where you can contribute in a meaningful way and not waste time on the things you can’t. That’s not to say you shouldn’t work on your weaknesses, but honing your strengths is where you’ll really shine.
       <br/><br/>If you aspire to management, you’ll find that understanding your triggers and reactions to particular situations will go a long way toward making you an effective leader. Hospitality and customer service can be chaotic at times and knowing how you react to stress and learning to manage your emotions will directly improve your productivity.
       <br/><br/>Self-awareness unlocks your competitive advantage. When you take the time to explore this during your job search, you’ll be much better equipped to find the company, job and manager that align with your personal goals and career plan.
       </TabPanel>
       
       <TabPanel value={value} index={1}>
       <h1 style={{color:'black', position:'relative'}}> The Interview</h1>
       <h2 style={{color:'black' , position:'relative'}}> Why is an interview necessary for a job?  </h2>
       <img src={Interview} style={{
                aspectRatio: 4,
                width: "100%"
            }}></img><br/>
       The candidate interview is a vital component of the hiring process. To hire the most qualified candidates, human resource professionals and hiring managers must be well informed on how to conduct interviews effectively. This article provides an overview of various interviewing methods, both structured and unstructured. It discusses the most widely used types of interviewing—telephone prescreen, direct one-on-one and panel interviews—and explains the objectives and techniques of behavioral, competency-based and situational approaches to interviewing.
       <br/><br/>Employers must be aware of federal and state prohibitions on asking certain types of questions during employment interviews. This article presents some basic guidelines for interviewers to follow to avoid claims of discrimination or bias in hiring, and it lists examples of questions not to ask job applicants.
       <br/><br/>With careful preparation, HR professionals and hiring managers can make the most of employment interviews and obtain the information they need. Preparatory steps include selecting a method of interviewing, drafting useful questions, phrasing questions properly and sharpening one's listening skills.</TabPanel>
       
       <TabPanel value={value} index={2}>
       <h1 style={{color:'black', position:'relative'}}> The Job</h1>
       <h2 style={{color:'black' , position:'relative'}}>Why negotiating your offer, thriving in a new job, and building a career you’ll love is important?</h2>
       <img src={Job} style={{
                aspectRatio: 4,
                width: "100%"
            }}></img><br/>
       Salary negotiation is a critical step in the hiring process. By taking the time to talk through why you feel you need more compensation, you can help employers better understand the value you provide. As with any new skill, the more you negotiate, the more you'll improve and the easier it will become.
       <br/><br/>Thriving at work is all about vitality and learning. People who are thriving at work feel energized on the job. They also feel that they are constantly learning and applying their new knowledge. Thriving employees are motivated by their work and experience great personal growth on the job. 
       <br/><br/> If you can't be authentic, you're not believable. A dream career is a job you love, are good at, passionate about, and would like to do long term. It's not the money or prestige it brings, but the hit you in your heart and soul because you'll love what you do!</TabPanel>
       </Box>
        <Typography sx={{ fontWeight: 500 }} variant="h5"></Typography>
         </Grid>
       </Grid>
     
     </Container>
<Footer/>
     </div>
   );

 }
