import React from 'react';

const Gif = ({ id, url, image }) => {
	return (
		<div className="col-lg-3 mb-3 text-center">
			<img src={image} href={url} />
		</div>
	);
};

export default Gif;
