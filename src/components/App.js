import React from 'react';
import { Reset } from 'styled-reset';
import Carousel from './Slider';
import data from '../data/data.json';

const App = () => {
	return (
		<>
			<Reset />
			<Carousel
				input={data[0]}
				bgPosition="right"
				messageColor="black"
				buttonText="View All"
				buttonLink="/"
			/>
			<Carousel input={data[1]} bgPosition="left" messageColor="blue" />
		</>
	);
};

export default App;
