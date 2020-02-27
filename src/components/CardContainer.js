import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";

export default class CardContainer extends React.Component{

    render(){
        const image_url = 'https://media.istockphoto.com/vectors/cinema-seamless-pattern-could-be-used-for-web-site-banner-invitation-vector-id1062240992';
        return(
            
            <>
            <div style={{ backgroundImage : `url(${image_url})`, backgroundRepeat: "repeat", backgroundSize: "300px 300px" }}>
                <CardDeck style={{"paddingLeft": '10%', "paddingTop": 20, 'marginTop': '5%'}}>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <MovieCard movie={ movie } user={this.props.user} addFavMovie={this.props.addFavMovie} key={key} />

                    ))}
                </CardDeck>
            </div>
             </>
        )
    }
}