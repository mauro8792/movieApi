import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {
    NavLink,
  } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default class Header extends React.Component{

    nameMovie = React.createRef()
    searchMovie=(e)=>{
        e.preventDefault();
        const Swal= require('sweetalert2');
        if(this.nameMovie.current.value){
            this.props.searchForNameLocal(this.nameMovie.current.value);
            
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Debe insertar un nombre',
                icon: 'error',
                confirmButtonText: 'Continuar'
              })
        }
         e.currentTarget.reset();
    }


    filterCat= (idCat ,e)=>{
        e.preventDefault();
        this.props.filterByCategory(idCat);
    }
    
    render(){
        let  navLogin, nav, filters ;
        const categories= JSON.parse(localStorage.getItem('genres'));
        if(!this.props.user.login){
            navLogin = <NavLink to="/login" style={{ color: 'white', padding: 10 }} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Iniciar sesión</NavLink>
        }else{//estas logeado
            if(!this.props.user.admin){                
                nav =  <Nav>
                            <NavLink to="/favs" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Lista de favoritos</NavLink>   
                        </Nav>
                navLogin =  <Nav>
                                <Button onClick={this.props.logout } style={{ color: 'white' }}variant="outline-warning">Cerrar </Button>
                            </Nav>
            }else{
                nav =   <Nav>
                            <NavLink to="/admin/movies" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Lista de películas</NavLink>
                            <NavLink to="/admin" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Agregar Película</NavLink>
                            
                        </Nav> 
                navLogin =  <Nav>
                                <Button onClick={this.props.logout } style={{ color: 'white'}}variant="outline-warning">Cerrar </Button>
                            </Nav> 
                        
            }
      }

        return(
            <>
                <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <NavLink to="/" onClick={this.props.inicio} style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Inicio</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="mr-auto">
                        <NavDropdown title="Categorias" id="dropdown-button-drop-right" drop='right'>
                            {categories && categories.map((category, key)=>(
                            <NavDropdown.Item onClick={(e)=>this.filterCat(category.id, e)} key={key}><NavLink to="/filtered" style={{ color: 'black', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>{category.name}</NavLink></NavDropdown.Item> 
                            ))}
                        </NavDropdown>
                        {nav}
                     </Nav>
                     
                    <Form inline onSubmit={this.searchMovie} >
                        <FormControl ref={this.nameMovie} type="text" placeholder="Buscar por nombre" className="mr-sm-2" />
                        <Button type="submit" variant="outline-warning">Buscar</Button>
                    </Form>
                    {navLogin}
                </Navbar>
            </>
        )
    }
}