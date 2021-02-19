import React from 'react';

const Slide = ({ input: { message, attribution }, messageColor }) => {
	return (
		<div className="slide">
			<p className={`message ${messageColor}`}>{message}</p>
			<p className="attribution">{attribution}</p>
		</div>
	);
};

export default Slide;
