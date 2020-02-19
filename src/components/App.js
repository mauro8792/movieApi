import React from 'react';
//Componentes programados
import User from "../pages/User.js";




class App extends React.Component {
  constructor(){
    super();
    this.state  ={
      result : '',
      query:'',
      error : ''
    }
  }
  
  componentDidUpdate(prevProps, prevState){
    
    if(prevState.query.page !== this.state.query.page){
      this.callApi();
      
    }  
  } 
  // llamada a la api para las peliculas mas popularesit

  

  callApi = ()=>{
    const keyApi= 'ce62b7f668a97b07e6d58a85df75641b';
    const urlApiPopular= `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&page=1&region=AR`;
    const urlApiNowPlaying= `https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}&page=1&region=AR`;
    const urlApiUpComing= `https://api.themoviedb.org/3/movie/upcoming?api_key=${keyApi}&page=1&region=AR`;
    
    fetch(urlApiPopular)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        localStorage.setItem('populares', JSON.stringify(data.results));
      })
      .catch(error=>{
        console.log(error);
        
    })

    fetch(urlApiNowPlaying)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        localStorage.setItem('nowPlaying', JSON.stringify(data.results));
      })
      .catch(error=>{
        console.log(error);
        
    })
    fetch(urlApiUpComing)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        localStorage.setItem('upComing', JSON.stringify(data.results));
      })
      .catch(error=>{
        console.log(error);
        
    })
    
  }


  // JSON.parse(localStorage.getItem('user'))

 render(){
   for (let i = 0; i < 1; i++) {   
    this.callApi()
   }
  // const movies= JSON.parse(localStorage.getItem('populares'));
   //console.log(movies);
      
  return (
    <>
       <User />
    </>
  );
   }
 }
export default App;
