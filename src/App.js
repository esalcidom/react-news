import React, {Component, Fragment}from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';
class App extends Component{
  state = {
    noticias: []
  }

  componentDidMount(){
    //recomendado llamar a una api en este metodo de ciclo de vida
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
  
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=c0b28beb134e4b4fb0e5f5c4ba3bdb43`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);

    this.setState({
      noticias: noticias.articles
    })
  }

  render(){
    return (
      <Fragment>
        <Header
          titulo='Noticias React API'
        >
        </Header>
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias
            noticias={this.state.noticias}
          />

          
        </div>
      </Fragment>
    );
  }
}

export default App;
