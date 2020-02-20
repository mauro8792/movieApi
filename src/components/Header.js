import React from "react";
import Login from "./Login.js";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import CardContainer from "./CardContainer.js";


export default class Header extends React.Component{
    
    
    render(){

        var result;
        if(this.props.user){
            result= <Login login={this.props.login} />
        }
        else{
            result= null;
        }

        return(
            <>
            <Router>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Link to="/home"><Navbar.Brand>MovieApp</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                                <NavLink to="/home" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Inicio</NavLink>
                                <NavLink to="/movies" style={{ color: 'white', padding: 10}} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Lista de películas</NavLink>
                                <NavLink to="/login" style={{ color: 'white', padding: 10 }} activeStyle={{fontWeight: "bold", color: "#5cb85c"}}>Iniciar sesión</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar por nombre" className="mr-sm-2" />
                        <Button variant="outline-warning">Buscar</Button>
                    </Form>
                </Navbar>
                <Switch>
                    <Route path="/home">
                        
                    </Route>
                    <Route path="/movies">              
                        <CardContainer/>
                    </Route>
                    <Route path="/login">
                        {result}
                    </Route>
                </Switch>
            </Router>
            </>
        )
    }
}