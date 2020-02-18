import React from 'react';
//Componentes programados
import Header from "./Header.js"
//Componentes de bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
//Componentes para el routeo
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends Component {
  
    state ={
      result : '',
      query:'',
      error : ''
    }
  
  componentDidUpdate(prevProps, prevState){
    /* console.log(prevState.result.page);
    console.log(this.state.result.page); */
    
    if(prevState.query.page !== this.state.query.page){
      this.callApi();
      console.log("hola");
      
    }  
  } 
  // llamada a la api para las peliculas mas popularesit
  callApi = ()=>{

    const keyApi= 'ce62b7f668a97b07e6d58a85df75641b';
    const urlApi= `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&page=1`;
    fetch(urlApi)
      .then(response=>{
        return response.json()
      })
      .then(data=>{
        this.setState({
          result : data
        })
      })
      .catch(error=>{
        console.log(error);
        
      })
  }
  datosConsulta = response =>{
    
      this.setState({
        query: response
      })
    
  }

 render(){
   for (let i = 0; i < 1; i++) {
    this.callApi()
   }
     
  return (
    <Header/>
  );
   }
 }
export default App;
