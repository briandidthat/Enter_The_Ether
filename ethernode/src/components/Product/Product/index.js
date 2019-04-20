import React from "react";
import ethernodeLogo from "../../../assets/ethernode_logo.svg"
import Button from "../../UI/Button";


const ProductCard = () => (
    <section className="home-cards">
        <div class="container">
            <div class="card">
                <img src={ethernodeLogo} alt="ethernode icon"></img>
                <h4>Ethernode</h4>
                <p>250 GB<br></br>
                    - EnOS Custom Linux Kernel<br></br>
                    - OpenRPC, nodeJS, http2<br></br>
                    - ETC Mainet and Kotti Ready<br></br>
                    - Custom Case and AC adapter<br></br>
                    - Easy to use Manual<br></br>
                </p>
                <Button className="button button-accent">Preorder</Button>
            </div>

            <div className="card">
                <img src={ethernodeLogo} alt="ethernode icon"></img>
                <h4>Ethernode</h4>
                <p>1 TB<br></br>
						- EnOS Custom Linux Kernel<br></br>
						- OpenRPC, nodeJS, http2<br></br>
						- ETC Mainet and Kotti Ready<br></br>
						- Custom Case and AC adapter<br></br>
						- Easy to use Manual<br></br>
				</p>
                <Button className="button button-accent">Preorder</Button>
            </div>

            <div class="card">
                <img src={ethernodeLogo} alt="ethernode icon"></img>
                <h4>Ethernode</h4>
                <p>2 TB<br></br>
                    - EnOS Custom Linux Kernel<br></br>
                    - OpenRPC, nodeJS, http2<br></br>
                    - ETC Mainet and Kotti Ready<br></br>
                    - Custom Case and AC adapter<br></br>
                    - Easy to use Manual<br></br>
                </p>
                <Button className="button button-accent">Preorder</Button>
            </div>
        </div>
    </section>
);

export default ProductCard;