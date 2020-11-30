import React, { /*useState*/ } from 'react';
//import Header                                     from './components/Header'
//import logo from './logo.svg';
import './scss/App.scss';
import {
  BrowserRouter,
 //Switch,
  Route,
  withRouter,
  // Link
} from "react-router-dom";
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
//import Layout                                     from './Layout';
import Header from './components/Header';
import Footer from './components/Footer';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import NavLink  from 'react-bootstrap/NavLink';
// import { CSSTransition } from 'react-transition-group';

const routes = [
  {path:'/', Page:HomePage, name:'Home', title:"Welcome"},
  {path:'/about', Page:AboutPage, name:'About', title:'About Us'},
  {path:'/contact', Page:ContactPage, name:'Contact', title: 'Contact Us'},
]


function App() {

  const RoutedHeader = withRouter(props => <Header {...props} />)
  return (
    <div className="App">
      <BrowserRouter>
        <RoutedHeader routes={routes}/>


         {routes.map( ({ path, Page, title }) => (
            <Route key={path} exact path={path}>
                  {/* {({match}) => (
                                    <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    className="page"
                                    unmountOnExit
                                  >
                                    <header>
                                        <h1>{title}</h1>
                                    </header>
                                  </CSSTransition>

                  )} */}
                  <div className="page">
                   <header className="content-header">
                                        <h1>{title}</h1>
                                    </header>
                  {console.log(title)}
                  <Page/>
                  </div>
                </Route>
                
        ))} 

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch> */}
      </BrowserRouter>
    <Footer />

      
    </div >
  );
}

export default App;
