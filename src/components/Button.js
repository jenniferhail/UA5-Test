import React from 'react';

const Button = ({ url, text }) => {
	return (
		<div className="btns">
			<a href={url} className="btn">
				{text}
			</a>
		</div>
	);
};

export default Button;
