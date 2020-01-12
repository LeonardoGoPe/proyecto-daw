import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";

import Home from "./App"
import Mapa from "./MapaApp"
import Noticias from './Noticias'
import Nosotros from "./Nosotros"
import Contactenos from './Contactenos'



class Index extends Component {
state = {
    isOpen: false
};
    
toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
}
  render() {
    return (
      <>
    <div className="app s-pxy-2">
      <Router>
      <MDBNavbar className=" w-100% l-100%" color="green" light expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to={`/`}>Principal</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={'/mapa'}>Aplicacion</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={'/noticias'}>Noticias</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown rigth>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Más información</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>
                  <MDBNavLink to={`/nosotros`}>Nosotros</MDBNavLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  <MDBNavItem>
                    <MDBNavLink to={'/contactenos'}>Contáctenos</MDBNavLink>
                  </MDBNavItem>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mapa" component={Mapa}/>
        <Route exact path="/noticias" component={Noticias}/>
        <Route exact path="/nosotros" component={Nosotros}/>
        <Route exact path="/contactenos" component={Contactenos}/>
       </Switch>
    </Router>
        </div>
      </>
    );
  }
}

render(<Index />, document.getElementById('root'));