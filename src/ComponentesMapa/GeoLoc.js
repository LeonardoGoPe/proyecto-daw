import { Component } from "react";
import { withLeaflet } from "react-leaflet";
import L from 'leaflet';
import datos from '../Data/Locaciones.xml';


import 'leaflet.awesome-markers'
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css'
import Locaciones from "../Data/Locaciones.json";



class LocateControl extends Component {
  componentDidMount() {
    const { map } = this.props.leaflet;

    function buscarLocalizacion(e) {
      L.marker(e.latlng).addTo(map);
    }
      
    function errorLocalizacion(e) {
        alert("No es posible encontrar su ubicación.");
    }
    
    map.on('locationerror', errorLocalizacion);
    map.on('locationfound', buscarLocalizacion);
    
    map.locate({setView: true, maxZoom:15});

  /*Funcion para leer el xml con las direcciones */
  fetch(datos)
    .then(function(resultado) {
      return resultado.text()
    })
    .then(function(str) {
      window.alert(str) 
      var parser = new DOMParser();
      var xml = parser.parseFromString(str, "text/xml");

      var locations = xml.getElementsByTagName("location");


      
      for (var i = 0; i < locations.length; i += 1) {
          var location = locations[i]
          
          var tipo = location.getElementsByTagName('tipo')[0]
          var latitud = location.getElementsByTagName('latitud')[0]
          var longitud = location.getElementsByTagName('longitud')[0]
          var descripcion = location.getElementsByTagName('descripcion')[0]
          var imagen = location.getElementsByTagName('imagen')[0]
          

          /* Asignación del tipo de ubicacion al punto en el mapa */
          switch (tipo.textContent) {

            case 'Parque':
              const EfectoParque = L.AwesomeMarkers.icon({
                icon: 'tree',
                markerColor: 'green',
                spin:false
              });
              L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
              var m = L.marker([latitud.textContent, longitud.textContent], {icon:EfectoParque}).addTo(map);
              m.bindPopup('<strong>'+tipo.textContent+'</strong><br/><br/><p>'+descripcion.textContent+'</p>', {maxWidth : 175});        
              break;

            case 'Veterinaria':
              const EfectoVeterinaria = L.AwesomeMarkers.icon({
                icon: 'user-md',
                markerColor: 'blue',
                spin:false
              });
              L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
              var m = L.marker([latitud.textContent, longitud.textContent], {icon:EfectoVeterinaria}).addTo(map);
              m.bindPopup('<strong>'+tipo.textContent+'</strong><br/<br/><p>'+descripcion.textContent+'</p>', {maxWidth : 175});
              break;

            case 'Tienda':
              const EfectoTienda = L.AwesomeMarkers.icon({
                icon: 'paw',
                markerColor: 'orange',
                spin:false
              });
              L.AwesomeMarkers.Icon.prototype.options.prefix = 'fa';
              var m = L.marker([latitud.textContent, longitud.textContent], {icon:EfectoTienda}).addTo(map);
              m.bindPopup('<strong>'+tipo.textContent+'</strong><br/><br/><p>'+descripcion.textContent+'</p>', {maxWidth : 175});
              break;
              
              
          }
          /*window.alert(descripcion.textContent) /*para saber que accedi bien */
      }

    })
}
  render() {
    return null;
  }
}

export default withLeaflet(LocateControl);