import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Frame, useMotionValue, useTransform, useAnimation } from 'framer';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

// Card component with destructured props
const Card = ({ image, color, info }) => {
// To move the card as the user drags the cursor
const motionValue = useMotionValue(0);

// To rotate the card as the card moves on drag
const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);

// To decrease opacity of the card when swiped
// on dragging card to left(-200) or right(200)
// opacity gradually changes to 0
// and when the card is in center opacity = 1
const opacityValue = useTransform(
	motionValue,
	[-200, -150, 0, 150, 200],
	[0, 1, 1, 1, 0]
);

// Framer animation hook
const animControls = useAnimation();

// Some styling for the card
// it is placed inside the card component
// to make backgroundImage and backgroundColor dynamic
const style = {
	// backgroundImage: `url(${image})`,
    body: info,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain',
	backgroundColor: color,
	boxShadow: '5px 10px 18px #888888',
	borderRadius: 10,
	height: 700,
    width: 700
};

return (
	<div className='App'>
	<Frame
		center
		// Card can be drag only on x-axis
		drag='x'
		x={motionValue}
		rotate={rotateValue}
		opacity={opacityValue}
		dragConstraints={{ left: -1000, right: 1000 }}
		style={style}
        // ={info}
		onDragEnd={(event, info) => {
		
		// If the card is dragged only upto 150 on x-axis
		// bring it back to initial position
		if (Math.abs(info.point.x) <= 150) {
			animControls.start({ x: 0 });
		} else {
			
			// If card is dragged beyond 150
			// make it disappear

			// Making use of ternary operator
			animControls.start({ x: info.point.x < 0 ? -200 : 200 });
		}
		}}
	/>
    <h1>Hello</h1>
	</div>
);
};

const Test = () => {
const cards = [
	{
	// image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
	color: 'black',
    info: "Hello there"
	},
	{
	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
	color: 'white'
	},
	{
	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
	color: '#white'
	},
	{
	image: 'https://img.icons8.com/color/452/GeeksforGeeks.png',
	color: 'black'
	}
];

return (
	<div className='App'>
	
	{/* Traversing through cards arrray using map function
	and populating card with different image and color */}
		
	{cards.map((card) => (
		<Card image={card.image} color={card.color} info={card.info} />
	))}
	</div>
);
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default Test;