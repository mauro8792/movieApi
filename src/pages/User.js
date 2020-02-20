import React from "react";
import CardContainer from "../components/CardContainer.js";
import Header from "../components/Header.js";
export default class User extends React.Component{
    
    render(){
        const movies= JSON.parse(localStorage.getItem('populares'));
        return (
            <>
                <Header login= {this.props.login} searchForName={this.props.searchForName}/>                
                <CardContainer movies={movies} />
            </>
        )
    }
}