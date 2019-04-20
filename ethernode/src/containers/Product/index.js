import React, { Component } from 'react'
import icons from "../../assets";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";



class Product extends Component {

    state = {
      amount: 0
    }

    render() {
        return (

            <section className="home-cards">
                <div className="container">

                    <Card>
                        <div className="card">
                            <img src={icons.ethernodeLogo} alt="ethernode icon"></img>
                            <h4>Ethernode</h4>
                            <p>250 GB<br></br>
                                - EnOS Custom Linux Kernel<br></br>
                                - OpenRPC, nodeJS, http2<br></br>
                                - ETC Mainet and Kotti Ready<br></br>
                                - Custom Case and AC adapter<br></br>
                            </p>
                            <Button className="button button-accent">Preorder</Button>
                        </div>
                    </Card>
                    <Card>
                        <div className="card">
                            <img src={icons.ethernodeLogo} alt="ethernode icon"></img>
                            <h4>Ethernode</h4>
                            <p>1 TB<br></br>
                                - EnOS Custom Linux Kernel<br></br>
                                - OpenRPC, nodeJS, http2<br></br>
                                - ETC Mainet and Kotti Ready<br></br>
                                - Custom Case and AC adapter<br></br>
                            </p>
                            <Button className="button button-accent">Preorder</Button>
                        </div>
                    </Card>
                    <Card>
                        <div className="card">
                            <img src={icons.ethernodeLogo} alt="ethernode icon"></img>
                            <h4>Ethernode</h4>
                            <p>2 TB<br></br>
                                - EnOS Custom Linux Kernel<br></br>
                                - OpenRPC, nodeJS, http2<br></br>
                                - ETC Mainet and Kotti Ready<br></br>
                                - Custom Case and AC adapter<br></br>
                            </p>
                            <Button className="button button-accent">Preorder</Button>
                        </div>
                    </Card>

                </div>
            </section>

        )
    }
}

export default Product;