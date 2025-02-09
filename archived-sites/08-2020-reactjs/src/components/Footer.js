import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<footer>
	          <small>
	            Made with
	            <FaHeart className="heart-icon" />
	            by Nam Nguyen
	          </small>
	        </footer>
		</>
	)
}

export default Footer;