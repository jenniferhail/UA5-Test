import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({
	input: { section_title, quotes },
	quoteColor,
	bgPosition,
	buttonText,
	buttonLink,
}) => {
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
		<section className="block slider">
			<div className="wrapper">
				{section_title && <h1 className="label">{section_title}</h1>}
				{quotes.length > 0 && (
					<>
						<Slider className="slides" {...settings}>
							{quotes.map((quote, index) => {
								const { message, attribution } = quote;
								return (
									<div key={index} className="slide">
										<p className={`message ${quoteColor}`}>
											{message}
										</p>
										<p className="dash">—</p>
										<p className="attribution">
											{attribution}
										</p>
									</div>
								);
							})}
						</Slider>
						{buttonLink && (
							<div className="btns">
								<a href={buttonLink} className="btn">
									{buttonText}
								</a>
							</div>
						)}
					</>
				)}
			</div>
		</section>
	);
};

export default Carousel;
