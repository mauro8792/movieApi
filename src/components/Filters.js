import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default class Filters extends React.Component{

render(){

    return(   
    <>    
        <Dropdown style={{"paddingTop":80, "paddingLeft": 50}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorías
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Acción</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Animación</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
);
    }
}