import React from "react";
import MovieService from '../service/movieService'
export default class TrTableAdmin extends React.Component{

    idMovie =  React.createRef();
    
    movieRemove=(e)=>{
        e.preventDefault();
        
        this.props.removeMovie(this.idMovie.current.value);
        //localStorage.setItem('movieForClient', JSON.stringify(movie)  
    }
    
    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {movie}= this.props;
        return (
            <>
            <tr>
                <th scope="row">1 </th>
                <td>{movie.title}</td>
                <td>{movie.description}</td>
                <td><img src={url +movie.image} width='150'/></td>
                <td>
                    
                    <form onSubmit={this.movieRemove}>
                    <input type="hidden" ref={this.idMovie} value={movie.id}/>
                    <button type="submit" className="btn btn-danger " id={movie.id} style={{marginTop:'2%', width: '100%'}}>Quitar</button>
                    </form>
                    
                </td>
            </tr>
        </>
        )
    }
}


