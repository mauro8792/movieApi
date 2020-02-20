import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";
import Filters from "./Filters.js";

export default class CardContainer extends React.Component{

    render(){
        let {movies} = this.props;
        return(
            <>
                        <Filters style={{padding: 50}}/>
                        <CardDeck style={{"padding-left": 50, "padding-top": 20}}>
                            {movies && movies.map((movie, key)=>(
                            <MovieCard movie={ movie } key={key} />
                            ))}
                        </CardDeck>
             </>
        )
    }
}