import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import opcional from '../img/default.gif'

export default class MovieCard extends React.Component{

    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {movie}= this.props;
        let imagen;
        if (movie.poster_path || movie.backdrop_path) {
             imagen = url+( movie.poster_path ? movie.poster_path : movie.backdrop_path)
        }else{
            imagen = opcional
        }
        
        return (
            <>
                    <Row>
                        <Col sm-3="true" >
                            <Card style={{ width: '18rem', marginBottom: 15 }} className="bg-dark text-white">
                                <Card.Img src={imagen } style={{width: '100%'}} alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title style={{"color": "yellow"}}>{movie.title}</Card.Title>
                                <Button variant="outline-warning">★</Button>
                                </Card.ImgOverlay>
                                <Card.Footer className="text-muted" style={{textAlign:'center'}}>
                                <Button variant="primary">Go somewhere</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
            </>
        )
    }
}