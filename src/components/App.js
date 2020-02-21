import React from 'react';
//Componentes programados
import userService from '../service/userService';
import movieService from '../service/movieService';
import Nav from './Nav';
import Login from "./Login.js";
import CardContainer from "../components/CardContainer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  constructor(){
    super();
    this.state  ={
      result : [],
      query:'',
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
          
        }else{
          alert('Email o contraseña inválido')
        }
      })
  }
  

  callApi = ()=>{
    movieService.popularMovie().then(data=>{
      localStorage.setItem('populares', JSON.stringify(data.results))
      this.setState({
        result : data.results
      })
      
    }) 
    movieService.upComingMovies().then(data=>{
      localStorage.setItem('upComing', JSON.stringify(data.results))
    })
    movieService.nowPlayingMovies().then(data=>{
      localStorage.setItem('nowPlayin', JSON.stringify(data.results))
    })
    
  }
  inicio = ()=>{
    movieService.popularMovie().then(data=>{
      localStorage.setItem('populares', JSON.stringify(data.results))
      this.setState({
        result : data.results,
        search :false
      })
    }) 
    
    console.log(this.state.result);
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
 render(){
       
    return (
        <>

          <Router>
            <Nav user={this.state.user} search={this.state.search} inicio={this.inicio} logout={this.logout} searchForName={this.searchForName} />

                <Switch>
                    <Route exact path='/' >
                        <CardContainer movies={this.state.result}/>
                    </Route>
                    <Route exact path="/movies" >    
                                  
                       
                    </Route>
                    
                    <Route exact path="/login">
                        <Login login = {this.login}
                        user={ this.state.user }
                        />

                    </Route>
                    <Route exact path="/logout" >
                     
                       
                    </Route>
                </Switch>
            </Router>

          {/* <CardContainer search={this.state.search} /> */}
        </>
    );
    
   }
 }
export default App;
