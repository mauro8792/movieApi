import React from 'react';
//Componentes programados
import userService from '../service/userService';
import movieService from '../service/movieService';
import Nav from './Nav';
import Login from "./Login.js";
import Movie from './Movie'
import Admin from '../pages/Admin'
import CardContainer from "../components/CardContainer.js";
import ListOfMovieAdmin from './ListOfMovieAdmin';
import Swal from 'sweetalert2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Redirect,
} from "react-router-dom";



class App extends React.Component {
  constructor(){
    super();
    this.state  ={
      result : [],
      forClient:[],
      clientFavs:[],
      error : '',
      user:{
        admin : false,
        login : false
      },
      search : false
    }
    const users = [
      {id: '1', email :'florencia@gmail.com', pass :'123456', admin: true},
      {id: '2', email :'mauro@gmail.com', pass :'123456', admin:false},
    ]
    localStorage.setItem('users', JSON.stringify(users))
  }

  
  
  componentDidMount(){
    this.callApi()
  } 

  componentDidUpdate(){
    
  }
  logout= ()=>{
    let logoutUser ={
      admin : false,
      login : false
    }
    this.setState({
      user : logoutUser
    })
  }

  login=(user)=>{
    const Swal= require('sweetalert2');
    userService.loginService(user)
      .then( acept =>{
        if (acept) {
          let loginUser ={
            admin : acept.admin,
            login : true
          }
          this.setState({
            user : loginUser
          });
          Swal.fire({
            title: 'Éxito!',
            text: 'Inicio de sesión correcto',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
          
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'Email o contraseña inválido',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
        }
      })
  }
  

  callApi = ()=>{
    movieService.popularMovie().then(data=>{
      localStorage.setItem('populares', JSON.stringify(data.results))
      let forClient= JSON.parse(localStorage.getItem('movieForClient'));   
      this.setState({
        result : data.results,
        forClient: forClient
      })
      
    }) 
    movieService.upComingMovies().then(data=>{
      localStorage.setItem('upComing', JSON.stringify(data.results))
    })
    movieService.nowPlayingMovies().then(data=>{
      localStorage.setItem('nowPlayin', JSON.stringify(data.results))
    })
    movieService.getGenres().then(data=>{
      console.log(data);
      
      localStorage.setItem('genres', JSON.stringify(data))
    })
    
  }
  inicio = ()=>{
      let forClient= JSON.parse(localStorage.getItem('movieForClient'));      
      this.setState({
        forClient: forClient,
        search :false
      })
  }

  searchForName = (name) =>{
    movieService.getMovieForNme(name).then(data=>{
     this.setState({
       search : true,
       result:data
     })
    localStorage.setItem('populares', JSON.stringify(data));
    return  data

    })
  }
  searchForNameLocal = (name) =>{
    let nameMayus = name.toUpperCase()
    let movies = JSON.parse(localStorage.getItem('movieForClient'));
    let resultado = movies.find(movie => 
      movie.title.toUpperCase().indexOf(nameMayus) ==! -1 );
    let buscado= [];
    buscado.push(resultado)
    this.setState({
       search : true,
       forClient: buscado
    })  
  }

  addFavMovie= (id)=>{
    let clientfavs=[];
    clientfavs= JSON.parse(localStorage.getItem('clientFavs'));
    let forclient = []
    forclient  = JSON.parse(localStorage.getItem('movieForClient'));
    console.log(clientfavs);

    forclient.forEach(movie => {
      if(movie.id==id){
        console.log(movie);
        if(clientfavs===null){
          let movies=[];
          movies.push(movie);
          localStorage.setItem("clientFavs", JSON.stringify(movies))
        }
        else{
          clientfavs.push(movie);
          localStorage.setItem("clientFavs", JSON.stringify(clientfavs));
        }
        this.setState({
          clientFavs: JSON.parse(localStorage.getItem('clientFavs'))
        })
        
      }
    });
    
    console.log(id);
  }

  addMovie = (movie)=>{
    console.log(movie);
    let forclient = []
    forclient  = JSON.parse(localStorage.getItem('movieForClient'));
    console.log(forclient);
    
    if (forclient===null) {
      let movies = [];
      movies.push(movie);
      localStorage.setItem('movieForClient', JSON.stringify( movies))
    } else{
      
      forclient.push(movie);
      localStorage.setItem('movieForClient', JSON.stringify( forclient))
    }   
    //console.log(movies);
    this.setState({
      forClient : forclient
    }) 

    /* return <Redirect to={'/'} />  */
  }
  
  removeMovie=(id)=>{
    let movies = JSON.parse(localStorage.getItem('movieForClient'))
    
    movies.forEach(movie => {
      if(movie.id==id){
        console.log(movie);
        this.removeItemFromArr(movies, movie)
      }
    });
    console.log(movies);
    
    localStorage.setItem('movieForClient',JSON.stringify( movies))
    this.setState({
      forClient : movies
    })
      return <Redirect to={'/'} />
    
    
  }

  removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
    arr.splice( i, 1 );
  }
  
 render(){
    //const image_url = 'https://st4.depositphotos.com/18476196/22335/v/1600/depositphotos_223351002-stock-illustration-cinema-seamless-pattern-could-used.jpg';
    return (
        <>
        {/*}<div style={{ backgroundImage : `url(${image_url})` }}>{*/}
          <Router>
            <Nav user={this.state.user} search={this.state.search} inicio={this.inicio} logout={this.logout} searchForNameLocal={this.searchForNameLocal} />

                <Switch>
                    <Route exact path='/' >
                        <CardContainer user={this.state.user} movies={this.state.forClient} addFavMovie={this.addFavMovie}/> 
                    </Route>
                    <Route exact path='/favs' >
                        <CardContainer user={this.state.user} movies={this.state.clientFavs} />
                    </Route>
                    <Route exact path="/movies/create" >    
                      <Movie addMovie = {this.addMovie}/> 
                    </Route>
                    <Route exact path="/admin/movies/" >    
                      <ListOfMovieAdmin  user={this.state.user} movies={this.state.forClient} addMovie={this.addMovie} removeMovie={this.removeMovie} />
                    </Route>
                    
                    <Route exact path="/login">
                        <Login login = {this.login}
                        user={ this.state.user }
                        />

                    </Route>
                    <Route exact path="/logout" >
                     
                       
                    </Route>
                    <Route exact path="/admin" >
                        <Admin searchForName={this.searchForName} user={this.state.user} movies={this.state.result} addMovie={this.addMovie} />

                    </Route>
                </Switch>
            </Router>
           {/*} </div> {*/}
        </>
    );
    
   }
 }
export default App;
