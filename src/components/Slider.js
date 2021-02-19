import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from './Button';
import Slide from './Slide';

const Carousel = ({
	input: { section_title, quotes },
	bgPosition,
	messageColor,
	buttonText,
	buttonLink,
}) => {
	// Slider Settings
	const settings = {
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	};
	return (
		<section className={`block slider ${bgPosition}`}>
			<div className="wrapper">
				{section_title && <h1 className="label">{section_title}</h1>}
				{quotes.length > 0 && (
					<>
						<Slider className="slides" {...settings}>
							{quotes.map((quote, index) => {
								return (
									<Slide
										key={index}
										input={quote}
										messageColor={messageColor}
									/>
								);
							})}
						</Slider>
						{buttonLink && (
							<Button url={buttonLink} text={buttonText} />
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default Carousel;
