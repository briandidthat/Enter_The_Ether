import React, { Component }from "react";
import ethernodeLogo from "../../assets/ethernode_logo.svg"
//UI Elements
import Button from "../UI/Button";


class Pricing extends Component {
    state = {
        amount: 0
    }
    //Checkout function accepts two arguments, 
    //Amount for Price
    checkoutHandler = (amount, tier) => {
        this.setState({ amount: amount, tier: tier })

    }


    render() {
        return (
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
                        </p>
                        <Button className="button button-accent">Preorder</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Pricing;