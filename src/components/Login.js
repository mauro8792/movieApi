import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default class Login extends React.Component{

    email = React.createRef();
    password= React.createRef()
    
    
    login=(e)=>{
        e.preventDefault();
        console.log('email',this.email.current.value);
        console.log('pass',this.password.current.value);
        if (this.email.current.value && this.password.current.value) {
            const user = {
                email : this.email.current.value,
                password : this.password.current.value
            }
            this.props.login(user);
        }
        e.currentTarget.reset();
        
    }


    render(){
        return (
            <Form onSubmit={this.login} style={{padding: 80}}>
            <Form.Group>
                <Form.Label>Mail</Form.Label>
                <Form.Control ref={this.email} type="email" placeholder="Ingrese su email" id="email"/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control ref={this.password} type="password" placeholder="Ingrese su contraseña" id="password"/>
                <Form.Text className="text-muted">Nunca compartiremos tu contraseña con nadie más.</Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">Iniciar sesión</Button>
            </Form>
        );
    }
}