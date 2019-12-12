import React from 'react';

const Noticia = ({noticia}) => {

    // extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    //condicionalmente cargar imagen si disponible

    const imagen = (urlToImage) ? 
    <div className="card-image">
        <img src={urlToImage} alt={title}></img>
        <span className="card-title">{source.name}</span>
    </div>
    : null;                
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                
                {imagen}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" className="waves-effect waves-light btn">ver noticia completa</a>
                </div>
            </div>
        </div>
    );
}

export default Noticia;