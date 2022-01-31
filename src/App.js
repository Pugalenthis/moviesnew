import './App.css';
import { useState } from 'react';

function App() {
  let movies = [{
    banner : "https://m.media-amazon.com/images/M/MV5BNmZkOThkNWYtOTY1ZC00MzZiLWExMDEtMTNhZDcyOGZiZTM5XkEyXkFqcGdeQXVyMTA5MTkyMzU2._V1_.jpg",
    title : "MUDHAL NEE MUDIVUM NEE"
},{
  banner : "https://www.sify.com/uploads/Jai_bhim_vjcj9cjbcihej.jpg",
  title : "JAI BHIM"
},{
  banner : "https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg",
  title : "MS-DHONI"
},{
  banner : "https://archive.gulte.com/content/2012/03/news/Dhanush-and-Shruthi-Hassan-3-Movie-Posters---Photos-130.jpg",
  title : "3"
},{
  banner : "https://static.toiimg.com/photo/73579998.jpeg",
  title : "OH MY KADAVULEY"
},{
  banner : "https://moviegalleri.net/wp-content/uploads/2018/07/Trisha-Krishnan-Vijay-Sethupathi-96-Movie-New-Poster.jpg",
  title : "96"
}]
  return (
    <div className="App">
        {movies.map(info=><Movies 
           banner = {info.banner}
           title = {info.title}
        />)}
    </div>
  );
}

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

function Movies({banner,title}){
  const[like,setlike] =useState(0);
  const[dislike,dellike] =useState(0);
    return (
      <div>
         <div className='card'>
               <img className='card-img-top' src={banner}></img>
               <div className='card-body'>
               <h6 className='card-title'>{title}</h6>
                  <div className='like'>
                   <i onClick={()=>{setlike(like+1)}} className='fa fa-thumbs-o-up' ><h6>{like}</h6></i>
                   <i onClick={()=>{dellike(dislike+1)}} className='fa fa-thumbs-o-down'><h6>{dislike}</h6></i>
                  </div>
               </div>
            </div>

         </div>
     
    )
}

export default App;
