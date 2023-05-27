import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import './App.css'
import RowFilms from "./components/RowFilms";
import FeaturedMovie from "./components/FeaturedMovie";
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData,setFeatureData] = useState(null)
  useEffect(()=>{
    const loadAll = async () => {
    
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list); // passa a lista de categorias para o movieList
    
      //pegando o destaque
      

    }
    loadAll();
  },[])

  return (
    <div className="page">
      {/*Header*/}
      
      {/*Destaque*/}
      {featureData &&
        <FeaturedMovie item = {featureData}/>
      }
      {/*Listas*/}
      <section className="lists">
        {movieList.map((item,key) => (
          <RowFilms title = {item.title} key = {key} items={item.items}/>
        ))}
      </section>
      {/*Rodapé basicao*/}
    </div>
  )
}