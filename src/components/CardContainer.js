import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";

export default class CardContainer extends React.Component{

    render(){
        console.log(this.props.user);
        
        return(
            
            <>
                <CardDeck style={{"paddingLeft": '10%', "paddingTop": 20, 'marginTop': '5%'}}>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <MovieCard movie={ movie } user={this.props.user} key={key} />
                    ))}
                </CardDeck>
             </>
        )
    }
}