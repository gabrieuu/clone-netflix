import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import './App.css'
import RowFilms from "./components/RowFilms";
export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list); // passa a lista de categorias para o movieList
    }
    loadAll();
  },[])

  return (
    <div className="page">
      {/*Header*/}
      {/*Destaque*/}
      
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