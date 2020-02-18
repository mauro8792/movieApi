import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Link to="/home"><Navbar.Brand>MovieApp</Navbar.Brand></Link>
                    <Nav className="mr-auto">
                        <Link to="/home"><Nav.Link>Inicio</Nav.Link></Link>
                        <Nav.Link href="#features">Iniciar sesión</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Buscar por nombre" className="mr-sm-2" />
                        <Button variant="outline-warning">Buscar</Button>
                    </Form>
                </Navbar>
                <Switch>
                    <Route path="/home">
                           {/* <Home /> */} {/*Aca se va a dirigir al home, cuando este exista, que es la lista total de peliculas*/ }
                    </Route>
                </Switch>
            </Router>
            </>
        )
    }
}