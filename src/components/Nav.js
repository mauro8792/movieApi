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

export default class Header extends React.Component{

    nameMovie = React.createRef()
    searchMovie=(e)=>{
        e.preventDefault();
        if(this.nameMovie.current.value){
            this.props.searchForNameLocal(this.nameMovie.current.value);
            
        }else{
            alert('Debe insertar un nombre!!')
        }
         e.currentTarget.reset();
    }
    
    render(){
        let  navLogin, nav ;
        if(!this.props.user.login){
            navLogin = <NavLink to="/login" style={{ color: 'white', padding: 10 }} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Iniciar sesión</NavLink>
        }else{//estas logeado
            if(!this.props.user.admin){                
                nav =  <Nav>
                            {/* <NavLink to="/home" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Inicio</NavLink> */}
                            {/* <NavLink to="/movies" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Lista de películas</NavLink> */}
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item   onClick={this.props.actionMov } to='/movies/acction'>Accion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Animacion</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/favs" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Lista de favoritos</NavLink>   
                        </Nav>
                navLogin =  <Nav>
                                <Button onClick={this.props.logout } style={{ color: 'white', padding: 10 }}variant="outline-warning">Cerrar </Button>
                            </Nav>
            }else{
                nav =   <Nav>
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Accion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Animacion</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> 
                            <NavLink to="/admin/movies" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Lista de películas</NavLink>
                            <NavLink to="/admin" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Agregar Película</NavLink>
                            
                        </Nav> 
                navLogin =  <Nav>
                                <Button onClick={this.props.logout } style={{ color: 'white', padding: 10 }}variant="outline-warning">Cerrar </Button>
                            </Nav> 
                        
            }
      }
        return(
            <>
                <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <NavLink to="/" onClick={this.props.inicio} style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Inicio</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav className="mr-auto">
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