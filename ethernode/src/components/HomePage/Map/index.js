import React from "react";
import mapImg from "../../../assets/map.png"
import "./Map.css"

const HomeMap = () => (
    <div className="home-map">
			<div>
				<h2>Decentralized Node Network</h2>
				<h5>Join a community that believes in immutability and protecting
					privacy utilizing hardware ditributed across the Globe
				</h5>
			</div>
			<div className="home-map-image">
				<img src={mapImg} alt="Global node hosting blockchain map"></img>

				<div className="ring-container">
					<div className="ringring"></div>
					<div className="circle"></div>
				</div>

				<div className="ring-container2">
					<div className="ringring"></div>
					<div className="circle"></div>
				</div>

				<div class="ring-container3">
					<div className="ringring"></div>
					<div className="circle"></div>
				</div>
			</div>
	</div>
)

export default HomeMap;