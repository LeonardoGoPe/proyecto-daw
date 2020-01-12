import React from 'react';

import Footer from './componentes/Footer';
import Noticias from './componenteNoticias/NoticiasPag';

function NoticiasBody() {
  return (
    <div className="Noticias">
      <Noticias></Noticias>
      <Footer></Footer>
    </div>
  );
}

export default NoticiasBody;