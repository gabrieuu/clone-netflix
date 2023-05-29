import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import './App.css'
import RowFilms from "./components/RowFilms";
import FeaturedMovie from "./components/FeaturedMovie";
import Navbar from "./components/Navbar";
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData,setFeatureData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
    
      //Pegando a lista total
      const list = await Tmdb.getHomeList();
      setMovieList(list); // passa a lista de categorias para o movieList
    
      //pegando o destaque
      const originalsNetflix = list.filter(i=>i.slug === 'originals');

      const randomChoosen = Math.floor(Math.random() * (originalsNetflix[0].items.results.length-1));

      let chosen = originalsNetflix[0].items.results[randomChoosen];

      let chooseInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
     // console.log(chosen);
      
      setFeatureData(chooseInfo)
    }
    loadAll();
  },[])

  return (
    <div className="page">
      {/*Header*/}
      
      <div className="container">
        <Navbar />
      {/*Destaque*/}
      {featureData &&
        <FeaturedMovie item = {featureData}/>
      }
      </div>
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