import './App.css';
import { useState } from 'react';
import { Movie } from './Movie';

function App() {

  const imovies = [
    {
    banner: "https://m.media-amazon.com/images/M/MV5BNmZkOThkNWYtOTY1ZC00MzZiLWExMDEtMTNhZDcyOGZiZTM5XkEyXkFqcGdeQXVyMTA5MTkyMzU2._V1_.jpg",
    title: "MUDHAL NEE MUDIVUM NEE",
    rating: 8,
    summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
  }
   ,{
    banner: "https://www.sify.com/uploads/Jai_bhim_vjcj9cjbcihej.jpg",
    title: "JAI BHIM",
    rating: 8,
    summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
  }
  , {
    banner: "https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg",
    title: "MS-DHONI",
    rating: 8,
    summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
  },
   {
    banner: "https://archive.gulte.com/content/2012/03/news/Dhanush-and-Shruthi-Hassan-3-Movie-Posters---Photos-130.jpg",
    title: "3",
    rating: 8,
    summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form"
  },
   {
    banner: "https://static.toiimg.com/photo/73579998.jpeg",
    title: "OH MY KADAVULEY",
    rating: 8,
    summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form "
  }, {
    banner: "https://moviegalleri.net/wp-content/uploads/2018/07/Trisha-Krishnan-Vijay-Sethupathi-96-Movie-New-Poster.jpg",
    title: "96",
    rating: 8,
  summary: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form " }

 ]

  const [copymovie, SetMovies] = useState(imovies)
  const [title, SetTitle] = useState()
  const [url, SetUrl] = useState()
  const [rating, SetRating] = useState()
  const [summary, SetSummary] = useState()

  const newmovie = (title, url, rating, summary) => {
    const addmovie = {
      title: title,
      banner: url,
      rating: rating,
      summary: summary
    }

    SetMovies([...copymovie, addmovie]);  
  }
  return (

    <div >

      <div className="inputs">
        <input className="form-control"  onChange={(val) => {
          SetTitle(val.target.value)

        }} placeholder='Enter your movie title'></input>

        <input className="form-control" onChange={(val) => {
          SetUrl(val.target.value)
          console.log(url)
        }} placeholder='Enter your movie image url'></input>

        <input className="form-control" onChange={(val) => {
          SetRating(val.target.value)
        }} placeholder='Enter your movie rating'></input>

        <input className="form-control" onChange={(val) => {
          SetSummary(val.target.value)
        }} placeholder='Enter your movie summary'></input>

        <button type='submit' onClick={() => {
          newmovie(title, url, rating, summary)
        }}
          className='btn bg-primary add-movie-button'>Add movie</button>
      </div>
      <div className='App'>
        {copymovie.map(info => <Movie
          banner={info.banner}
          title={info.title}
          rating={info.rating}
          summary={info.summary}
        />)}
      </div>

    </div>
  );
}







export default App;




//hooks is a function starts with use keyword.
//usestate is used to inform react that value is updated
//setstate used to update state

/*function Movies(){
  
  // let like =4;
  const[like,setlike]=useState(0);
  //const [state,setState] = useState(Initial_value)

  // const double =(n)=>[n,n*2];
  // const[h1,h2]=double(8)
  // console.log(h1,h2)
   return (
     <div>
       <button onClick={()=>{
          // like++;
          // console.log(like)
          setlike(like-1)
       }}>like</button>
       <h3>{like}</h3>
     </div>
     
        
   )
}*/

