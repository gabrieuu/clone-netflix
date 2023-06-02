import React, { useState } from "react";
import './RowFilms.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default ({title,items}) => {

    const [scrollX,setScrollX] = useState(0)

    const arrowLeft = () => {
        let x = scrollX + Math.round(window.innerWidth/2)
        if(x>0){
            x=0
        }
        setScrollX(x)
    }
    const arrowRight = () => {
        let x = scrollX - Math.round(window.innerWidth/2)
        let listW = items.results.length * 150;
        if(window.innerWidth-listW > x){
            x = window.innerWidth-listW-60;
        }
        setScrollX(x)
    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            
            <a className="seta left" onClick={arrowLeft}><ArrowBackIosIcon style={{
                fontSize:40,
                transform:'translateX(20%)'
                }}/></a>
            <a className="seta right" onClick={arrowRight}><ArrowForwardIosIcon style={{fontSize:40}}/></a>
            <div className="movieRow-listarea">
                <div className="movieRow-list" style={{
                    marginLeft: scrollX,
                    width:items.results.length*150}}>
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