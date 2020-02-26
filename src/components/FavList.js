import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import FavMovie from "./FavMovie.js";

export default class FavList extends React.Component{

    //se le manda desde el padre la lista de favoritos, esas serian movies

    render(){
        return(
            <>
            <Carousel>
            {this.props.movies && this.props.movies.map((movie, key)=>(
                    <FavMovie movie={ movie } key={key} />
                    ))}
            </Carousel>
            </>
        )
    }
}
