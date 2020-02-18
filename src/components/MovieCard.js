import React from 'react';
import Card from 'react-bootstrap/Card';

export default class MovieCard extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {movie}= this.props;
        return (
            <>
                <Card className="bg-dark text-white">
                <Card.Img src={url + movie.poster_path} width="200" alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>{movie.title}</Card.Title>
                </Card.ImgOverlay>
                </Card>
            </>
        )
    }
}