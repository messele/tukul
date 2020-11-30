import React from 'react'
import Container from 'react-bootstrap/Container';
import Header   from './components/Header';

class Layout extends React.Component {


    constructor() {
        super();
        this.state = {title : ''}
        this.onNavClickedHandler.bind(this);
    }

    onNavClickedHandler(menu) {
        this.setState( { title: menu.title });
    }

    render() {
        return (
            <Container fluid>
                <Header onNavClicked={this.onNavClickedHandler.bind(this)} />
                <div>
                    <h1>{this.state.title}</h1>
                </div>
            </Container>
        );

    }
}

export default Layout;