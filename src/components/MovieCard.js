import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class MovieCard extends React.Component{

    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {movie}= this.props;
        return (
            <>
                    <Row>
                        <Col sm-3>
                            <Card style={{ width: '18rem' }} className="bg-dark text-white">
                            <Card.Img src={url + movie.poster_path} style={{width: 300, heigth: 300}} alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>{movie.title}</Card.Title>
                            </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
            </>
        )
    }
}