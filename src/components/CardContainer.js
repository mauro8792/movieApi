import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";
import Filters from "./Filters.js";

export default class CardContainer extends React.Component{

    render(){


        return(
            
            <>
                {/* <Filters style={{padding: 50}}/>  */}
                <CardDeck style={{"paddingLeft": '10%', "paddingTop": 20, 'marginTop': '5%'}}>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <MovieCard movie={ movie } user={this.props.user} addFavMovie={this.props.addFavMovie} key={key} />
                    ))}
                </CardDeck>
             </>
        )
    }
}