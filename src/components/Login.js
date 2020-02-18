import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default class Login extends React.Component{


    render(){
        return (
            <Form style={{padding: 80}}>
            <Form.Group>
                <Form.Label>Mail</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su email" id="email"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" id="password"/>
                <Form.Text className="text-muted">Nunca compartiremos tu contraseña con nadie más.</Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">Iniciar sesión</Button>
            </Form>
        );
    }
}