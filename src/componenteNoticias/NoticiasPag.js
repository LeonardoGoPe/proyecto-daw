import React, { Component } from "react";
import 'font-awesome/css/font-awesome.css';
import './Noticias.css';

import Noticias from "../Data/Noticias.json";



const BodyNoticias = () => 
<div>
    <input id="txtBuscador" type="text" /> 
		<button id="btnBuscar" class="contact100-form-btn" onClick={eventoBuscar}>Buscar</button>
    <h2 id="tituloNosotros">Noticias</h2>


    <section id="Noticias" class="Noticias col-10 offset-1"> 
    {Noticias.Noticias.map(Noticias => (
    <div className="Noticia">
        <h3 class="tituloNoticia">{Noticias.titulo}</h3>
        <img class="imagenNoticia" src={Noticias.imagen} alt={Noticias.alternativo}></img>
        <p class="fechaEvento">{Noticias.fecha}</p>
        <p id="parrafoEvento">{Noticias.desripcion}</p>
    </div>
      ))}
    </section>
</div>

const eventoBuscar = (event) => {
  var textoBusqueda = document.getElementById("txtBuscador").value;
  //console.log(textoBusqueda);
  var noticias = document.getElementsByClassName("Noticia");
  if(textoBusqueda==""){
    for(var i = 0; i<noticias.length;i++){
      noticias[i].style.display = "block";
    }
  }else{
    for(var i = 0; i<noticias.length;i++){
      var titulo=noticias[i].getElementsByClassName("tituloNoticia")[0].innerHTML;
      //console.log((titulo.toLowerCase()).includes(textoBusqueda.toLowerCase()));
      if(!(titulo.toLowerCase()).includes(textoBusqueda.toLowerCase())){
        noticias[i].style.display = "none";
      }
    }
  }
}

export default BodyNoticias;