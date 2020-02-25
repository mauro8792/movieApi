import Movie from "../components/Movie.js";
import React from "react";
import TrTableAdmin from '../components/TrTableAdmin.js';
import {
    Redirect,
  } from "react-router-dom";

export default class ListOfMovieAdmin extends React.Component{

    
    render(){        
        if (!this.props.user.login){
            return <Redirect to={'/login'} />
        }
        return(
            <>
            <div className='container' >
                <Movie addMovie={this.props.addMovie}/>
            </div>
            <div className='container'style={{marginTop:'2%'}}>
                <table className="table table-responsive">
                <caption>lista de películas</caption>
                    <thead>
                        <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Imagen</th>
                        <th scope="col"> Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <TrTableAdmin movie={ movie } key={key} removeMovie={this.props.removeMovie}/>
                    ))} 
                    
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
