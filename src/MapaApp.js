import React from 'react';

import Footer from './componentes/Footer'
import Mapa from './ComponentesMapa/Mapa'

function MapaApp() {
  return (
    <div className="MapaApp">
      <Mapa></Mapa>
      <Footer></Footer>
    </div>
  );
}

export default MapaApp;