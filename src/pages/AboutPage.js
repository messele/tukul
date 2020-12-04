import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                {/* <p>Page is under construction!!</p> */}
                <Container>
                    <Jumbotron>
                        <div>
                            <p className="content summary">
                                Tukul llc is a <strong> minority owned small business </strong> that operates in Fairfax, VA. 
                                We specialize in:
                            </p>
                            <ul className="list">
                                <li>
                                    <h4 className="content details-header">Application development</h4>
                                    <div className="content details">We help customers build next generation products and tools. </div>
                                </li>
                                <li>
                                    <h4 className="content details-header">Cloud Migration</h4>
                                    <div className="content details">Our team of experts help our customers to sucessfully migrate their workloads to the clould.</div>
                                </li>

                            </ul>
                        </div>
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}
