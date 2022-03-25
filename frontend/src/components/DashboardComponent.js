import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styles from "./dashboard.module.css";
import { SUMMARIES } from "../assets/summaries";
import Button from "@mui/material/Button";
import axios from 'axios';
import Cookies from 'js-cookie';

function Dashboard() {
  const companies = SUMMARIES;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  const saveClicked = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };

  axios.get("/api/auth/getpitch",{
    headers: {
      "Cookie": Cookies.get('mysession')
    }
  })
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });


  return (
    <div className={styles.test}>
      <div id={styles["root"]}>
        
        <div className={styles.cardContainer}>
          {companies.map((company) => (
            <TinderCard
              className={styles.swipe}
              key={company.name}
              onSwipe={(dir) => swiped(dir, company.name)}
              onCardLeftScreen={() => outOfFrame(company.name)}
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
        {lastDirection != 'down' ? (
          <h2 className={styles.infoText}>You swiped {lastDirection}</h2>
        ) : (
          <h2 className={styles.infoText} >This item has been saved for later</h2>
        )}
      </div>
    </div>
  );
}

export default Dashboard;