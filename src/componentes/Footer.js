import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter  } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "./Componentes.css"
import 'font-awesome/css/font-awesome.css'

class FooterPage extends Component {
  render(){
    return (
    <MDBFooter color="green" className="font-small pt-3 mt-0">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h4><strong className="title">¡Síguenos! </strong></h4>
            <h6 style={{color:"white"}}>
              Para que estés al tanto de nuestras novedades
            </h6>
          </MDBCol>
          <MDBCol md="4">
            <h5><strong className="title">Redes sociales</strong></h5>
            <ul class="list-unstyled list-inline text-center">
              <li class="list-inline-item">
                <a class="btn btn-social-icon  btn-twitter "  href ="#">
                  <span class = "fa fa-twitter"> </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn btn-social-icon  btn-facebook "  href ="#">
                  <span class = "fa fa-facebook"> </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn btn-social-icon  btn-instagram " href ="#">
                  <span class = "fa fa-instagram"> </span>
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    );
  }
}

export default FooterPage;