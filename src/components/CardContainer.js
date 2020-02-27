import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";

export default class CardContainer extends React.Component{

    render(){

        return(
            
            <>
                <CardDeck style={{"paddingLeft": '10%', "paddingTop": 20, 'marginTop': '5%'}}>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <MovieCard viewMore={this.props.viewMore} movie={ movie } user={this.props.user} addFavMovie={this.props.addFavMovie} key={key} />

                    ))}
                </CardDeck>
             </>
        )
    }
}