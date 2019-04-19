import React from "react";
import ethernodeLogo from "../../../assets/ethernode_logo.svg";
import enconnectLogo from "../../../assets/enconnect_logo.svg";


const HomeCard = () => (

	<section className="home-cards">
		<div className="container">

			<div className="card">
				<img src={ethernodeLogo} alt="ethernode icon"></img>
				<h4>Ethernode</h4>
				<p>Hardware for your home.<br></br>
					a one stop shop solution.<br></br>
				</p>
				<a href="#top" class="button button-accent">Coming Soon!</a>
			</div>

			<div className="card">
				<img src={ethernodeLogo} alt="EnOS io icon"></img>
				<h4>EnOS.io</h4>
				<p>Our Linux based lightweight<br></br>
					ETC Blockchain OS<br></br>
				</p>
				<a href="#top" class="button button-accent">Coming Soon!</a>
			</div>

			<div className="card">
				<img src={enconnectLogo} alt="enconnect icon"></img>
				<h4>EnConnect.io</h4>
				<p>Cloud Nodes for custom needs.<br></br>
					Account access, and Support.
				</p>
				<a href="#top" class="button button-accent">Coming Soon!</a>
			</div>

		</div>
	</section>

);



export default HomeCard;