import React, { Component } from "react";
import aboutUs1 from './Recursos/aboutUs1.jpg'
import aboutUs2 from './Recursos/aboutUs2.jpg'
import aboutUs3 from './Recursos/aboutUs3.jpg'
import perfilLeo from './Recursos/perfilLeo.jpg'
import 'font-awesome/css/font-awesome.css'
import Footer from './componentes/Footer'

const BodyNosotros = () => 
<div>
<div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">Sobre nosotros</h1>
        <p class="lead text-muted mb-0">Siempre hemos querido salir con nuestros amigos de cuatro patas a explorar diferentes lugares, diferentes parques, inclusive sitios que ayuden a la salud o diversión para ellos, pero siempre es difícil encontrarlos... Por eso pensamos en este proyecto, para que tú no pases lo que pasamos nosotros.</p>
        <p class="lead text-muted">Somos amantes de los animales como no te imaginas, por eso queremos compartir este amor que sentimos con ellos y queremos que tú también lo hagas.
        </p>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={aboutUs1} alt="" class="img-fluid" /></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1">
        <h2 class="font-weight-light">Nuestro objetivo</h2>
        <p class="font-italic text-muted mb-4">Lo que buscamos con esta app es poder dar a conocer puntos de interés para nuestros compañeros de vida, como lo son los parques, veterinarias o lugar de ventas de artículos.</p>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={aboutUs2} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
    </div>
   </div>
</div>


    <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto">><img src={aboutUs3} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Mision y Vision</h2>
        <p class="font-italic text-muted mb-4">Organizar la información de diferentes puntos de interés de los amantes de sus mascotas. Encontrar parques, veterinarias, tiendas, noticias, eventos y todo lo que incentive a las personas a pasar más tiempo con sus amigos de toda la vida.</p>
      </div>
    </div>

<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Nuestro equipo</h2>
        <p class="font-italic text-muted">Todo este proyecto se lleva a cabo gracias a....</p>
      </div>
    </div>
  </div>
</div>

    <div class="row text-center">
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Javier Anchundia</h5><span class="small text-uppercase text-muted">Programador</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={perfilLeo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Leonardo Gómez</h5><span class="small text-uppercase text-muted">Desarrollador web</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Matheus López</h5><span class="small text-uppercase text-muted">Investigador y Fundador del proyecto</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
</div>
export default BodyNosotros;