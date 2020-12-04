import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React from 'react';
import NavLink  from 'react-bootstrap/NavLink';
// import logo from '../logo.svg';

class Header extends React.Component {
    
    
    render() {
       const { location, routes } = this.props;
        return (
            <>
            <Container  fluid>
                <Navbar fixed='top' bg="light" expand="lg" >
                    <Navbar.Brand href="/">
                        Tukul llc
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navs"/>
                    <Navbar.Collapse id="responsive-navs">
                        <Nav className="mr-auto justify-content-end container-fluid">
                            {routes && routes.map(
                                route => 
                                         <Nav.Link 
                                         key={route.path} 
                                         href={ route.path } 
                                         as= { NavLink } 
                                         to={route.path} 
                                        // activeClassName="active"
                                         className = {location.pathname === route.path ? "active" : ""}
                                         exact="true">
                                                {route.name}
                                         </Nav.Link>
                                
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            </>

        );
    }
}
                                    
export default Header;

