import Netflix from './Netflix.jpg'
import {Link,Route,Routes}from "react-router-dom"
import Home from './Home'
import Movies from './Movies'
import Favourite from './Favourite'
import Movie from './Movie'
import dada from './dada.jpg'
import good from'./good.jpg'
import love from"./love.jpg"
import logo from "./logo.png"
function App(){
  var moviearr=[{
    id:1,
    movie:'DaDa',
    hero: 'Kavin',
    heroin:'Aparna Das',
    dis: "Manikandan and Sindhu are in love and accidentally becomes teenage parents. They face obstacles and situations to bring up their son, Adithya.",
    image: dada
  },
  {
    id:2,
    movie:'Good night',
    hero: 'Manikandan',
    heroin:'Meetha',
    dis:" Good Night is about Mohan (Manikandan), an IT professional. A child at heart and an underconfident individual, Mohan deals with extensive snoring that results",
    image: good

  },
  {
    id:3,
    movie:'LovetoDay',
    hero: 'Pradeep',
    heroin:'Ivana',
    dis:" One of the most popular Tamil films of the year, Love Today, is now available on OTT. Pradeep Ranganathan is the writer and director of the romantic comedy. With this movie, Pradeep Ranganathan",
    image: love

  }
   ]
  return(
    <div>
        
        <img className='logo' src={logo}/>
        <img  className='netflix' src={Netflix} />
      

     <div className='aaa'>
      
     <ul> 
      <li> <Link className='Link' to={'/home'}>Home</Link></li>
      <li> <Link className='Link' to={'/Movies'}>Movies</Link></li> 
     <li> <Link className='Link' to={'/fav'}>Favourite</Link></li>  </ul>
    </div>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/movies" element={<Movies  a={moviearr}/>}/>
    <Route path="/fav" element={<Favourite/>}/>
    <Route path="/mov/:id" element={<Movie a={moviearr}/>}/>
    



    </Routes>
    </div>
  )
}
export default App