 import React from 'react'
 import { Container, Paper,Box } from "@mui/material"
 import PropTypes from 'prop-types';
 import Grid from '@mui/material/Grid';
 import Typography from '@mui/material/Typography';
 import Tabs from '@mui/material/Tabs';
 import Tab from '@mui/material/Tab';
 import Header from '../assets/Header.png';
 import funding from '../assets/funding.jpeg';
 import extend from '../assets/extend.png';
 import build from '../assets/build.jpeg';
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
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
           <Tab label="Raising Funds" {...a11yProps(0)}/>
           <Tab label="Extend Your Reach " {...a11yProps(1)} />
           <Tab label="Build Your Business" {...a11yProps(2)} />
         </Tabs>
       </Box>

       <TabPanel value={value} index={0}>
       <h1 style={{color:'black', position:'relative'}}> Raising Funds</h1>
       <h2 style={{color:'black' , position:'relative'}}> Series A, B, C Funding: How It Works</h2>
       <img src={funding}style={{
                aspectRatio: 4,
                width: "100%"
            }}></img><br/>
       A startup with a brilliant business idea is aiming to get its operations up and running. From humble beginnings, the company proves the worthiness of its model and products, steadily growing thanks to the generosity of friends, family and the founders' own financial resources. Over time, its customer base begins to grow, and the business begins to expand its operations and its aims. Before long, the company has risen through the ranks of its competitors to become highly valued, opening the possibilities for future expansion to include new offices, employees and even an initial public offering (IPO).
      <br/><br/>If the early stages of the hypothetical business detailed above seem too good to be true, it's because they generally are. While there are a very small number of fortunate companies that grow according to the model described above (and with little or no "outside" help), the large majority of successful startups have engaged in many efforts to raise capital through rounds of external funding. These funding rounds provide outside investors the opportunity to invest cash in a growing company in exchange for equity, or partial ownership of that company. When you hear discussions of Series A, Series B and Series C funding rounds, these terms are referring to this process of growing a business through outside investment.
      <br/><br/>There are other types of funding rounds available to startups, depending upon the industry and the level of interest among potential investors. It's not uncommon for startups to engage in what is known as "seed" funding or angel investor funding at the outset. Next, these funding rounds can be followed by Series A, B and C funding rounds, as well as additional efforts to earn capital as well, if appropriate. Series A, B and C are necessary ingredients for a business that decides bootstrapping, or merely surviving off of the generosity of friends, family and the depth of their own pockets, will not suffice.       <br/><br/> You can’t really find the perfect job if you don’t know what you’re looking for, right?  You may already know in what area of hospitality you’d like to work, but that really isn’t enough to find a job that’s really fulfilling. You need to understand what motivates you, what your goals are, what kind of work environment you want and what qualities you want to develop.
       </TabPanel>
       
       <TabPanel value={value} index={1}>
       <h1 style={{color:'black', position:'relative'}}> Extend Your Reach</h1>
       <h2 style={{color:'black' , position:'relative'}}> How to Increase Customer Retention </h2>
       <img src={extend} style={{
                aspectRatio: 4,
                width: "100%"
            }}></img><br/>
      It's not enough to just get new customers for your business. You also need to keep your existing customers coming back. When you increase customer retention, you're building customer loyalty, which can increase sales.
 <br/><br/>Considering it costs five-times as much to get a new customer than it does to keep a current one, focusing on retaining customers means your business won’t spend money on something that isn’t a guaranteed investment.
 <br/><br/>You can increase your customer retention by:
 <br/>1. Prioritizing customer service: If you don’t treat your customers right, they won’t want to support your business. Making sure you address their concerns and give them the best experience possible shows you value them as a customer.
 <br/><br/>2. Using a customer relations management (CRM) system: CRM systems help your business manage relationships with existing and potential customers. They help you maintain customer information and identify sales opportunities. One of the biggest benefits is that the data gets stored in one place, so you and other employees who need it can access it.
 <br/><br/>3. Creating a customer loyalty program: These programs reward your existing customers for supporting your business. They can also help you attract new customers or get back those that left your business.
 <br/><br/>4. Launching an email campaign: Using an email campaign can help make sure your business stays on top of customers’ minds. It’s also a great way to move existing and potential customers through your sales funnel.
 <br/><br/>5. Engaging with customers on social media: Your customers may reach out to your business on social media with a question or to share feedback, pain points or complaints. Taking the time to respond and engage with them shows you value their thoughts and take their concerns seriously.
 <br/><br/>6. Keep your promises: No one likes feeling forgotten. If you tell a customer you’ll follow up with them with more information or contact them at a later date, do it. If you don’t, it can give your customers a bad impression of your business.
 </TabPanel>
       <TabPanel value={value} index={2}>
       <h1 style={{color:'black', position:'relative'}}> Build Your Business</h1>
       <h2 style={{color:'black' , position:'relative'}}>What are the key factors to build a business?</h2>
       <img src={build} style={{
                aspectRatio: 4,
                width: "100%"
            }}></img><br/>
You can’t build a strong business without investing time and money into it. You’ll also need to promote your business and establish a strong marketing plan.
<br/><br/>In today’s world, building a business also means you’ll need a strong website and social media presence. These can help you learn your customers better. With them, you can even request customers’ email addresses so you can reach them directly as you promote your business. 
<br/><br/>If you’re looking to add employees to your team right away, be sure to hire the best startup team who will support your operation and set it up for success.</TabPanel>
       </Box>
        <Typography sx={{ fontWeight: 500 }} variant="h5"></Typography>
         </Grid>
       </Grid>
     
     </Container>
<Footer/>
     </div>
   );

 }
