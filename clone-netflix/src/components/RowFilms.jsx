import React from "react";
import './RowFilms.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default ({title,items}) => {
    const arrowLeft = () => {

    }
    const arrowRight = () => {
        
    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            
            <div className="movieRow-listarea">
            <a className="seta left" onClick={arrowLeft}><ArrowBackIosIcon style={{
                fontSize:40,
                transform:'translateX(20%)'
                }}/></a>
            <a className="seta right" onClick={arrowRight}><ArrowForwardIosIcon style={{fontSize:40}}/></a>
                <div className="movieRow-list">
                {items.results.length > 0 && items.results.map((iten, key)=>( 
                    <div key ={key} className="movieRow-item">
                        <img src={`https://image.tmdb.org/t/p/w300${iten.poster_path}`} alt={iten.original_title}/>
                        
                    </div>                  
                ))}
                </div>

                
            </div>
        </div>
    )
}