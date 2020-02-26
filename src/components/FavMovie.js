import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import opcional from '../img/default.gif'

export default class FavMovie extends React.Component{
    render(){
        const {movie}= this.props;
        let url= "https://image.tmdb.org/t/p/w500";
        let imagen;
        if (movie.poster_path || movie.backdrop_path) {
             imagen = url+( movie.poster_path ? movie.poster_path : movie.backdrop_path)
        }else{
            imagen = opcional
        }
        return(
            <>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={imagen}
                alt={movie.title}
                />
                <Carousel.Caption>
                <h3>{movie.title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </>
        )
    }
}