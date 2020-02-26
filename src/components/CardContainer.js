import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import MovieCard from "./MovieCard.js";
import Filters from "./Filters.js";

export default class CardContainer extends React.Component{

    render(){
        /* let movies;
        if(!this.props.search){
             movies = JSON.parse(localStorage.getItem('populares'));
        }else{
            console.log('llegamos');
            
            movies = JSON.parse(localStorage.getItem('populares'));
            console.log(movies);
            
            
            
        } */
        console.log(this.props.movies)
        return(
            
            <>
                {/* <Filters style={{padding: 50}}/>  */}
                <CardDeck style={{"paddingLeft": '10%', "paddingTop": 20, 'marginTop': '5%'}}>
                    {this.props.movies && this.props.movies.map((movie, key)=>(
                        <MovieCard movie={ movie } addFavMovie={this.props.addFavMovie} key={key} />
                    ))}
                </CardDeck>
             </>
        )
    }
}