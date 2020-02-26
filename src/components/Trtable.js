import React from "react";
import MovieService from '../service/movieService'
import Swal from 'sweetalert2';
export default class Trtable extends React.Component{

    idMovie =  React.createRef();
    
    movieAdd=(e)=>{
        e.preventDefault();
        const Swal = require('sweetalert2');
       MovieService.getMovieForId(this.idMovie.current.value).then(data=>{
           console.log( "genre", data.genres)
           let movie = {
               id : data.id,
               title : data.title,
               title_original : data.original_title,
               description : data.overview,
               image : data.poster_path, 
               genres: data.genres
           }
          // console.log(movie);
           
           this.props.addMovie(movie);
           Swal.fire({
            title: 'Éxito!',
            text: 'Película añadida a la lista',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })

        //localStorage.setItem('movieForClient', JSON.stringify(movie));
            
       })
       
    
        
        
    }
    
    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {movie}= this.props;
        return (
            <>
            <tr>
                <td>{movie.title}</td>
                <td>{movie.overview.length>250 ? movie.overview.substr(0,250) : movie.overview }</td>
                <td><img src={url +movie.backdrop_path} width='150' alt={movie.title}/></td>
                <td>
                    <form onSubmit={this.movieAdd}>
                    <input type="hidden" ref={this.idMovie} value={movie.id}/>
                    <button type="submit" id={movie.id} className="btn btn-success" >Agregar</button>
                    </form>
                </td>
            </tr>
        </>
        )
    }
}
