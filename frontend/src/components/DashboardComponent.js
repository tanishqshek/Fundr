import React from "react";
import TinderCard from "react-tinder-card";
import styles from "./dashboard.module.css";
// import { SUMMARIES } from "../assets/summaries";
// import Button from "@mui/material/Button";
import axios from 'axios';
// import Cookies from 'js-cookie';
import { Component } from "react";
// import { renderMatches } from "react-router-dom";

// let companies = SUMMARIES;
// var temp = [];
// var tempList = [];

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.swiped = this.swiped.bind(this);
    this.outOfFrame = this.outOfFrame.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      lastDirection: "",
      companyData: [],
        isSignedIn: false,
        userType: "",
        tempList: []
    };
};
  
  
  swiped (direction, nameToDelete, pitchid, userid)  {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
    this.setState({ lastDirection: direction});
    // this.state.lastDirection = direction;

    if(direction == "right"){
      console.log("You swiped right")
      axios.post('/api/auth/swipe', { 
        // "Id": this.state.id,
        // "LastName": this.state.lname,
        "action":direction,
        "target":userid,
        "pitch_id": pitchid     
      })
        .then(res => {
          // console.log(res);
          console.log(res.data);
          if (res.status === 200) {
            
          }
        
        })
        .catch(function (error) {
          console.log(error.toJSON());
          
        });
    }
  };

  // swiped (direction, nameToDelete)  {
  //   console.log("removing: " + nameToDelete);
  //   // setLastDirection(direction);
  //   // this.state.lastDirection = direction;
  //   this.setState({lastDirection : direction});
  // }

  outOfFrame (name) {
    console.log(name + " left the screen!");
  };

  saveClicked(direction, nameToDelete) {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  async componentDidMount(){
    await fetch("/api/auth/getpitch",{
      // headers: {
      //   "Cookie": Cookies.get('mysession')
      // }
    })
    .then(response => response.json())
    .then(data => this.setState({ tempList: [...this.state.tempList, data.message] }))
    // .then(console.log("templist: " ,this.state.tempList))
      // console.log(res);
      // console.log(res.data.message);
  //     if (res.status == 200) {
  //       // this.setState({ isSignedUp: true });
  //       // localStorage.setItem(this.state.email, this.state.typeOfUser);  // after signing up, set the state to true. This will trigger a re-render
  //       // this.setState.companyData = res.data.message;
  //       console.log(res.json());
  //       this.setState({ tempList: [...this.state.tempList, res.data.message] })
  //       // temp.push(res.data.message);
        
  //       // for(let x of temp){
  //       //   // console.log("companyDataX: ", x);
  //       //   // tempList = x;
  //       //   this.setState({ tempList: [...this.state.tempList, x] })
  //       //   console.log("tempList: ", this.state.tempList);
          
  //       // }
        
  //       console.log("SAMPLE: ", companies);
  //     }
    
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   // temp.map((items, index) =>{console.log("companyData: ", items );})
  //   console.log("tempList: ", this.state.tempList);
  }


render(){

  console.log("templist: " ,this.state.tempList[0]);
  return (
    
    <div className={styles.test}>
      <div id={styles["root"]}>
      
        <div className={styles.cardContainer}>
          
          {
          this.state.tempList.length !== 0 
          ?
          <>
          {
          this.state.tempList[0].map((company) => (
            // console.log("Return: ", company.ImageUrl)
            <TinderCard
              className={styles.swipe}
              key={company.PitchId}
              onSwipe={(dir) => this.swiped(dir, company.CompanyName, company.PitchId, company.UserId)}
              onCardLeftScreen={() => this.outOfFrame(company.CompanyName)}
            >
              
              <div className={styles.card}>
                <h3 className={styles.card_h3}>{company.CompanyName}
                </h3>
                <h3 className={styles.h3}>Tags: {company.Tags}
                </h3>
                <div className={styles.cardImagediv} >
                  {/* <div  > */}
                  
                  <img className={styles.cardImage} src={company.ImageUrl} alt={"test"} />
                  {/* </div>, */}
                </div>
                <p className={styles.para}>{company.Description}</p>
              </div>
            </TinderCard>
          ))
}
          </>
          :
          <> Loading...</>
        }
        </div>
        {this.lastDirection !== 'down' ? (
          <h2 className={styles.infoText}>You swiped {this.lastDirection}</h2>
        ) : (
          <h2 className={styles.infoText} >This item has been saved for later</h2>
        )}
      </div>
    </div>
  );
        }}


export default Dashboard;