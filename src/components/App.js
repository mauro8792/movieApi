import React from 'react';
//Componentes programados
import Admin from "../pages/Admin.js";
import User from "../pages/User.js";
import userService from '../service/userService';
import movieService from '../service/movieService';



class App extends React.Component {
  constructor(){
    super();
    this.state  ={
      result : '',
      query:'',
      error : '',
      user:{
        admin : false,
        login : false
      }
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
  

  login=(user)=>{
    userService.loginService(user)
      .then( acept =>{
        if (acept) {
          let loginUser ={
            admin : acept.admin,
            login : true
          }
          this.setState({
            user : loginUser
          })
          
          alert('te logeaste')
        }else{
          alert('Email o contraseña inválido')
        }
      })
  }

  callApi = ()=>{
    movieService.popularMovie().then(data=>{
      localStorage.setItem('populares', JSON.stringify(data.results))
    }) 
    movieService.upComingMovies().then(data=>{
      localStorage.setItem('upComing', JSON.stringify(data.results))
    })
    movieService.nowPlayingMovies().then(data=>{
      localStorage.setItem('nowPlayin', JSON.stringify(data.results))
    })
    
  }

  searchForName = (name) =>{
    console.log('name',name);
    movieService.getMovieForNme(name).then(data=>{
      console.log('data', data);
      
      return  data
    })
    
  }
 render(){

    let login= this.login;
    let user= this.state.user;

    if(user && user.admin){
      return <Admin  user={user} login={login} searchForName={this.searchForName}/>
    }
    else{
     return  <User  user={user} login={login} searchForName={this.searchForName}/>
    }
   }
 }
export default App;
