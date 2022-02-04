// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';
// // import Card from '@mui/material/Card';
// // import CardHeader from '@mui/material/CardHeader';
// // import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';

// // Card component with destructured props
// const Card = ({color, cardDetails }) => {

// 	constructor(props){
// 		super();
// 		this.state={
// 		  name:"Unknown"
// 		}
// 	  };
// // To move the card as the user drags the cursor
// const motionValue = useMotionValue(0);

// // To rotate the card as the card moves on drag
// const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

// // To decrease opacity of the card when swiped
// // on dragging card to left(-200) or right(200)
// // opacity gradually changes to 0
// // and when the card is in center opacity = 1
// const opacityValue = useTransform(
// 	motionValue,
// 	[-200, -150, 0, 150, 200],
// 	[0, 1, 1, 1, 0]
// );

// // Framer animation hook
// const animControls = useAnimation();
// // const cardDetails = cardDetails;

// // Some styling for the card
// // it is placed inside the card component
// // to make backgroundImage and backgroundColor dynamic
// const style = {
// 	// backgroundImage: `url(${image})`,
// 	backgroundRepeat: 'no-repeat',
// 	backgroundSize: 'contain',
// 	backgroundColor: color,
// 	boxShadow: '5px 10px 18px #888888',
// 	borderRadius: 10,
// 	height: 700,
//     width: 700
// };

// return (
// 	<div className='App'>
// 	<Frame
// 		center
// 		// Card can be drag only on x-axis
// 		drag='x'
// 		x={motionValue}
// 		rotate={rotateValue}
// 		opacity={opacityValue}
// 		dragConstraints={{ left: -1000, right: 1000 }}
// 		style={style}
//         // ={info}
// 		onDragEnd={(event, info) => {
		
// 		// If the card is dragged only upto 150 on x-axis
// 		// bring it back to initial position
// 		if (Math.abs(info.point.x) <= 150) {
// 			animControls.start({ x: 0 });
// 		} else {
			
// 			// If card is dragged beyond 150
// 			// make it disappear

// 			// Making use of ternary operator
// 			animControls.start({ x: info.point.x < 0 ? -200 : 200 });
// 		}
// 		}}
// 	>{cardDetails}</Frame>
    
// 	</div>
// );
// };

// const Test = () => {
	
// const cards = [
// 	{
// 	// image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
// 	color: 'white',
//     cardDetails: "Hello there Tanishq"
// 	},
// 	{
// 	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
// 	color: 'white'
// 	},
// 	{
// 	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
// 	color: 'white'
// 	},
// 	{
// 	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
// 	color: 'white'
// 	}
// ];

// return (
// 	<div className='App'>
	
// 	{/* Traversing through cards arrray using map function
// 	and populating card with different image and color */}
		
// 	{cards.map((card) => (
// 		<Card image={card.image} color={card.color} info={card.info} />
// 	))}
// 	</div>
// );
// };

// // ReactDOM.render(<App />, document.getElementById('root'));
// export default Test;

//#2
// import Cards, { Card } from 'react-swipe-card'
// import './style.css'

// const data = ['Alexandre', 'Thomas', 'Lucien']

// const Test = () => {
//   return (
// 	  <Cards onEnd={console.log('end')} className='master-root'>
//         {data.map(item => 
//           <Card 
//             onSwipeLeft={console.log('swipe left')} 
//             onSwipeRight={console.log('swipe right')}>
//             <h2>{item}</h2>
//           </Card>
//         )}
//       </Cards>
//   )
// }


import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'
import styles from './test.module.css'

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

function Test () {
  const characters = db
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
        {characters.map((character) =>
          <TinderCard className={styles.swipe} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className={styles.card}>
              <h3 className={styles.card_h3}>{character.name}</h3>
			  <p>{character.info}</p>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className={styles.infoText}>You swiped {lastDirection}</h2> : <h2 className={styles.infoText} />}
    </div>
	</div>
  )
}

// export default Simple


export default Test;