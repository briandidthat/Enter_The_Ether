import React from "react";
import "./About.css"

//Functional component that only renders the children it is passed
//ex: "<About><h1>Hi my name is EtherNode</h1></About>"
//would render "Hi my name is Ethernode"
const About = ({ children }) => (
	<div className="home-about">
		<div> 
			{children}
		</div>
	</div>
);

export default About;