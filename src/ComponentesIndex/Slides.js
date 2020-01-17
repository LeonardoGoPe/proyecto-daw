import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import "mdbreact/dist/css/mdb.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "../componentes/Componentes.css"

import Slide1 from '../Recursos/Slide1.jpg'
import Slide2 from '../Recursos/Slide2.jpg'
import Slide3 from '../Recursos/Slide3.jpg'

const CarouselPage = () => {
  return (
    <MDBContainer className="m-0 p-0 col-sm-12">
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"

      
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Slide1}
              alt="First slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">¿Te gusta pasar tiempo con tus mascotas?</h3><br/>
            <h5>¡Obvio que si! A quién no le gusta compartir con sus mascotas. Salir, correr y divertirse con ellos es lo mejor que puedes hacer.</h5>

          </MDBCarouselCaption>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={Slide2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">¡Entonces los parques son para ustedes!</h3><br/>
            <h5>Sin embargo, ¿sabes de parques donde ir con tus amigos de cuatro patas?</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={Slide3}
              alt="Third slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Pues aquí tenemos su mejor opción</h3><br/>
            <h5>Aquí encontrarás todo lo relacionado para hacer feliz a tu amigo de cuatro patas, ¡De seguro eso lo hará muy feliz!</h5>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;