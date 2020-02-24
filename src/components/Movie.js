import React from 'react';
import {  Container } from 'react-bootstrap';
import {
    Redirect,
  } from "react-router-dom";

export default class Movie extends React.Component{

    state = {
        added: false
    }

    titulo = React.createRef();
    image= React.createRef()
    description = React.createRef()
    
   
    add=(e)=>{
        e.preventDefault();
        if (this.titulo.current.value && this.image.current.value) {
            const movie = {
                title : this.titulo.current.value,
                description : this.description.current.value,
                poster_path : this.image.current.value
            }
            this.props.addMovie(movie);
            this.setState({
                added : true
            })
        }
        e.currentTarget.reset();
        
    }


    render(){
       
        return (
        
            <Container style={{"paddingLeft": 50, "paddingTop": 20, 'marginTop': '5%'}}>
               <form  encType="multipart/form-data" onSubmit={this.add}>
                

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group label-floating">
                            <label className="control-label">Título de la Película</label>
                            <input type="text" ref={this.titulo}className="form-control" name="name" placeholder='Título' />
                        </div>
                        <div className="form-group label-floating">
                            <textarea type="text" ref={this.description} className="form-control" name="description"></textarea>
                            
                        </div>
                        <div className="form-group label-floating">
                            <label className="control-label">Imagen de la Película</label>
                            <input type="text" ref={this.image} className="form-control" name="image" placeholder='Url de la imagen' />
                        </div>
                        
                    </div>
                    
                </div>

                

                <button className="btn btn-warning t-black">Registrar Pelicula</button>
                
            </form>
            </Container>
        );
    }
}