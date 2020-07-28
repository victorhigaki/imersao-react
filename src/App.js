import React from 'react';
import Menu from './components/Menu';
import dados_iniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
      />

      <Carousel
        ignoreFirstVideo
        category={dados_iniciais.categorias[0]}
      />

      <Carousel category={dados_iniciais.categorias[1]}
      />

      <Carousel category={dados_iniciais.categorias[2]}
      />

      <Carousel category={dados_iniciais.categorias[3]}
      />

      <Carousel category={dados_iniciais.categorias[4]}
      />

      <Carousel category={dados_iniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;
