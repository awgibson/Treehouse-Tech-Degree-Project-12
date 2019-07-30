// Dependencies
import React from 'react';

// Reactstrap Components
import { Col } from 'reactstrap';

const Gif = ({ id, url, image, alt }) => {
	return (
		<Col lg="3" className="mb-3 text-center">
			<img src={image} href={url} id={id} alt={alt} />
		</Col>
	);
};

export default Gif;
