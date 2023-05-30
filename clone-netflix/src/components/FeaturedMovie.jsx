import React from "react";
import './FeaturedMovie.css'


export default ({item}) => {

    const firstDate = new Date(item.first_air_date)
    const genres = []

    item.genres.map(genero => {
        genres.push(genero.name)
    })

    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left'
        }}>
            <div className="featured-shadow-horizon">
                <div className="feature-shadow-vertical"></div>
              
               <div className="featured-box">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points margin-right">{item.vote_average.toFixed(2)} pontos</div>
                        <div className="featured-year margin-right">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporadas</div>
                    </div>
                    <div className="featured-description">{item.overview}</div>
                    
                    <div className="featured-buttons">
                        <a className="watch" href="#">Assistir</a>
                        <a className="myList" href="#">Minha Lista</a>
                    </div>
                    <div className="featured-genres">{genres.join(", ")}</div>
                </div>
            </div>
        </section>
    )
}