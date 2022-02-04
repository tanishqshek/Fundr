import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import styles from './dashboard.module.css'

const db = [
  {
    name: 'Richard Hendricks',
    // url: './src/assets/img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    // url: '../assets/img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    // url: '../assets/img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    // url: '../assets/img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    // url: '../assets/img/dinesh.jpg'
	  info: "Hey this is dinesh"
  }
]

function Dashboard () {
  const companies = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
	  <div className={styles.test}>
    <div id={styles["root"]}>
      {/* <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' /> */}
      {/* <h1>React Tinder Card</h1> */}
      <div className={styles.cardContainer}>
        {companies.map((company) =>
          <TinderCard className={styles.swipe} key={company.name} onSwipe={(dir) => swiped(dir, company.name)} onCardLeftScreen={() => outOfFrame(company.name)}>
            <div className={styles.card}>
              <h3 className={styles.card_h3}>{company.name}</h3>
              <div className={styles.cardImagediv}>
                <div className={styles.cardImage}></div>
              </div>
			        <p>{company.info}</p>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className={styles.infoText}>You swiped {lastDirection}</h2> : <h2 className={styles.infoText} />}
    </div>
	</div>
  )
}

export default Dashboard;