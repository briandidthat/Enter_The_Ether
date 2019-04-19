import React from "react";
import ethernodeLogo from "../../../assets/ethernode_logo.svg"

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
                <a href="https://ethernode.io/" class="button button-accent">Preorder</a>
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
                <a href="https://ethernode.io/enos" class="button button-accent">Preorder</a>
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
                <a href="https://ethernode.io/" class="button button-accent">Preorder</a>
            </div>
        </div>
    </section>
);

export default ProductCard;