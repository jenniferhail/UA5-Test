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
				quoteColor="black"
				bgPosition="right"
				buttonText="View All"
				buttonLink="/"
			/>
			<Carousel input={data[1]} quoteColor="blue" bgPosition="left" />
		</>
	);
};

export default App;
