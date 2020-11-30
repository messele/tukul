import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//import Beep from './Beep';

const footerStyle = { color: "white", width: '80%', left: '20px', position: 'relative' };
export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small bg-dark pt-4 fixed-bottom">
                <Container fluid >
                    <Row xs='12' style={footerStyle}>
                        <p>
                            &copy; tukul llc 2020
                        </p>
                    </Row>
                    {/* <Beep/> */}
                </Container>

            </footer>

        )
    }
}
