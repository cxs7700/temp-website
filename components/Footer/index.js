import React from 'react';
import Socials from '../Socials';

const Footer = ({ dark }) => {
	return (
		<>
			<div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
				<h1 className="text-2xl text-bold">Get In Touch</h1>
				<div className="mt-5">
					<Socials />
				</div>
			</div>
		</>
	);
};

export default Footer;
