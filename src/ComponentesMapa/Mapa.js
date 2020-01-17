import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import LocateControl from './GeoLoc';
import { Draggable } from "leaflet";

const styles = {
    wrapper: { 
      height: 550, 
      width: '100%',
      margin: 'auto', 
      display: 'flex'
    },
    map: {
      flex: 1
    } 
  };

  const Mapa = props => {
    return (
      <div style={styles.wrapper} className="leaflet-dragging">
        <Map style={styles.map} center={props.center} zoom={props.zoom}>
          <TileLayer url={props.url} />
          <LocateControl startDirectly/>
          <Marker position={props.center}>
          </Marker>
        </Map>
      </div>
    );
  }
  
  Mapa.defaultProps = {
    center: [0, 0],
    zoom: 10,
    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  };
  export default Mapa;