import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";

export default class CardContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {movies} = this.props;
        return(
            <>
                        <CardDeck>
                            {movies && movies.map((movie, key)=>(
                            <MovieCard movie={ movie } key={key} />
                            ))}
                        </CardDeck>
             </>
        )
    }
}