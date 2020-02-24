import AddMovie from "../components/AddMovie.js";
import React from "react";
import Trtable from '../components/Trtable.js';
import {
    Redirect,
  } from "react-router-dom";
export default class Admin extends React.Component{

    
    render(){
        
        if (!this.props.user.login){
            return <Redirect to={'/login'} />
        }
        
        return(
            <>
            {/* <Header user={this.props.user} login={this.props.login}/> */}
            
            <div className='container'style={{marginTop:'10%'}}>
                <table className="table table-responsive">
                <caption>lista de películas</caption>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
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
