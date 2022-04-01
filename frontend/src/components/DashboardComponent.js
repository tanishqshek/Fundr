// import React, { useState } from "react";
// import TinderCard from "react-tinder-card";
// import styles from "./dashboard.module.css";
// import { SUMMARIES } from "../assets/summaries";
// import Button from "@mui/material/Button";
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function Dashboard() {
//   const companies = SUMMARIES;
//   const [lastDirection, setLastDirection] = useState();
//   const [companyData, setCompanyData] = useState();
//   const swiped = (direction, nameToDelete) => {
//     console.log("removing: " + nameToDelete);
//     setLastDirection(direction);
//   };

//   const outOfFrame = (name) => {
//     console.log(name + " left the screen!");
//   };

//   const saveClicked = (direction, nameToDelete) => {
//     console.log("removing: " + nameToDelete);
//     // setLastDirection(direction);
//   };

//   axios.get("/api/auth/getpitch",{
//     // headers: {
//     //   "Cookie": Cookies.get('mysession')
//     // }
//   })
//   .then(res => {
//     console.log(res);
//     console.log(res.data.message);
//     if (res.status === 200) {
//       // this.setState({ isSignedUp: true });
//       // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
//       // setCompanyData(res.data.message)
//     }
  
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   console.log("Company data: ",companyData);
  


//   return (
//     <div className={styles.test}>
//       <div id={styles["root"]}>
        
//         <div className={styles.cardContainer}>
//           {companies.map((company) => (
//             <TinderCard
//               className={styles.swipe}
//               key={company.name}
//               onSwipe={(dir) => swiped(dir, company.name)}
//               onCardLeftScreen={() => outOfFrame(company.name)}
//             >
//               <div className={styles.card}>
//                 <h3 className={styles.card_h3}>{company.name}
//                 </h3>
//                 <h3 className={styles.h3}>Tags: {company.tags}
//                 </h3>
//                 <div className={styles.cardImagediv} >
//                   {/* <div  > */}
                  
//                   <img className={styles.cardImage} src={company.image} />
//                   {/* </div>, */}
//                 </div>
//                 <p className={styles.para}>{company.description}</p>
//               </div>
//             </TinderCard>
//           ))}
//         </div>
//         {lastDirection != 'down' ? (
//           <h2 className={styles.infoText}>You swiped {lastDirection}</h2>
//         ) : (
//           <h2 className={styles.infoText} >This item has been saved for later</h2>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styles from "./dashboard.module.css";
import { SUMMARIES } from "../assets/summaries";
import Button from "@mui/material/Button";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Component } from "react";
import { renderMatches } from "react-router-dom";

let companies = SUMMARIES;

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.swiped = this.swiped.bind(this);
    this.outOfFrame = this.outOfFrame.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      lastDirection: "",
      companyData: "",
        isSignedIn: false,
        userType: ""
    };
};
  
  
  swiped (direction, nameToDelete)  {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
    this.state.lastDirection = direction;
  };

  outOfFrame (name) {
    console.log(name + " left the screen!");
  };

  saveClicked(direction, nameToDelete) {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  


render(){

  axios.get("/api/auth/getpitch",{
    // headers: {
    //   "Cookie": Cookies.get('mysession')
    // }
  })
  .then(res => {
    console.log(res);
    console.log(res.data.message);
    if (res.status === 200) {
      // this.setState({ isSignedUp: true });
      // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
      // setCompanyData(res.data.message)
    }
  
  })
  .catch(function (error) {
    console.log(error);
  });

  // console.log("Company data: ",companyData);

  return (
    <div className={styles.test}>
      <div id={styles["root"]}>
        
        <div className={styles.cardContainer}>
          {companies.map((company) => (
            <TinderCard
              className={styles.swipe}
              key={company.name}
              onSwipe={(dir) => this.swiped(dir, company.name)}
              onCardLeftScreen={() => this.outOfFrame(company.name)}
            >
              <div className={styles.card}>
                <h3 className={styles.card_h3}>{company.name}
                </h3>
                <h3 className={styles.h3}>Tags: {company.tags}
                </h3>
                <div className={styles.cardImagediv} >
                  {/* <div  > */}
                  
                  <img className={styles.cardImage} src={company.image} />
                  {/* </div>, */}
                </div>
                <p className={styles.para}>{company.description}</p>
              </div>
            </TinderCard>
          ))}
        </div>
        {this.lastDirection != 'down' ? (
          <h2 className={styles.infoText}>You swiped {this.lastDirection}</h2>
        ) : (
          <h2 className={styles.infoText} >This item has been saved for later</h2>
        )}
      </div>
    </div>
  );
        }}


export default Dashboard;