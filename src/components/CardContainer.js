import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";
import Filters from "./Filters.js";

export default class CardContainer extends React.Component{

    render(){
        const movies= JSON.parse(localStorage.getItem('populares'));
        return(
            <>
                        <Filters style={{padding: 50}}/>
                        <CardDeck style={{"paddingLeft": 50, "paddingTop": 20}}>
                            {movies && movies.map((movie, key)=>(
                            <MovieCard movie={ movie } key={key} />
                            ))}
                        </CardDeck>
             </>
        )
    }
}