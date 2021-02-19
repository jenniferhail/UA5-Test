import React from 'react';

const Slide = ({ input: { message, attribution } }) => {
	return (
		<div className="slide">
			<p className="message">{message}</p>
			<p className="attribution">{attribution}</p>
		</div>
	);
};

export default Slide;
