import React from "react";
import './FeaturedMovie.css'

export default ({item}) => {
    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left'
        }}>
            <div className="feature-shadow-vertical">

            </div>
            <div className="featured-shadow-horizon"></div>
        </section>
    )
}