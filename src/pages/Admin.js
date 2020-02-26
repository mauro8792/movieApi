import React from "react";
import Trtable from '../components/Trtable.js';
import {
    Redirect,
  } from "react-router-dom";
export default class Admin extends React.Component{
    
    nameMovie = React.createRef()
    searchMovie=(e)=>{
        e.preventDefault();
        if(this.nameMovie.current.value){
            this.props.searchForName(this.nameMovie.current.value);
            
        }else{
            alert('Debe insertar un nombre!!')
        }
         e.currentTarget.reset();
    }
    
    render(){
        
        if (!this.props.user.login){
            return <Redirect to={'/login'} />
        }
        
        return(
            <>
            <div className='container'style={{marginTop:'10%'}}>
                <form onSubmit={this.searchMovie}>
                    <div className="row">
                        <div className="col-9">
                        <input type="text" ref={this.nameMovie} className="form-control" placeholder="Nombre del Título"/>
                        </div>
                        <div className="col-3">
                        <button type="submit" className="btn btn-secondary" style={{width:'100%'}}>Buscar</button>
                        </div>
                    </div>
                </form>
                <table className="table table-responsive" style={{marginTop:'5%'}}>
                <caption>Lista de películas</caption>
                    <thead>
                        <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Imagen</th>
                        <th scope="col"> Agregar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <Trtable movie={ movie } key={key} addMovie={this.props.addMovie}/>
                    ))}
                    
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
