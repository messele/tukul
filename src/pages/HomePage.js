import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div className="content-body container-fluid ">
                    <div id="slides" className="carousel slide d-none d-sm-block d-lg-block d-md-block" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#slides" data-slide-to="0"></li>
                            <li data-target="#slides" data-slide-to="1"></li>
                            {/* <!-- <li data-target="#slides" data-slide-to="2"></li> --> */}
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/background.jpg" alt="bg1"/>
                                <div className="carousel-caption main">
                                    <h1 className="display-2">Tukul</h1>
                                    <h2 className="dispay-3">Build, innovate and convert visions to solutions...</h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="images/softwareDevelopment2.jpg" alt="bg2" />
                                <div className="carousel-caption">
                                    {/* <!-- <h1 className="display-2">Tukul</h1> --> */}
                                    <h2 className="dispay-3">Developing next generation software...</h2>
                                </div>
                            </div>
                            {/* <!-- <div className="carousel-item">
                            <img src="images/background3.jpg">
                            <div className="carousel-caption">
                                <h1 className="display-2">Tukul</h1>
                                <h2 className = "dispay-3">Build, innovate and convert visions to solutions...</h2>
                            </div>
                        </div> --> */}
                        </div>


                    </div><hr />
                    <Container className="flipbox">
                        <Jumbotron className="flipbox">
                            <div className="title"> <i className="fa fa-wrench fa-2x"></i>
                                <h3>Software development.</h3>

                            </div>
                            <div className="body software-development">
                                We specialize in helping build custom software to fit our customers' enterprise needs.
                        {/* <a className="more" href="/">Learn more</a> */}
                            </div>
                        </Jumbotron>
                        <div className="jumbotron flipbox">
                            <div className="title"> <i className="fa fa-tachometer fa-2x"></i>
                                <h3>Cloud migration.</h3>

                            </div>
                            <div className="body">
                                We help our customers to seamlessly move their workloads to various cloud providers as AWS, Azure and more...
                        {/* <a className="more" href="#">Learn more</a> */}
                            </div>
                        </div>
                        <div className="jumbotron flipbox">
                            <div className="title"> <i className="fa fa-tasks fa-2x"></i>
                                <h3>Other services</h3>

                            </div>
                            <div className="body">
                                We provide other services such as building Devsecops infrastrature and cybersecruity solutions.
                        {/* <a className="more" href="#">Learn more</a> */}
                            </div>
                        </div>
                    </Container>
                </div>
            </div> );

    }
}
export default HomePage;