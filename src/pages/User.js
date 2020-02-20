import React from "react";
import CardContainer from "../components/CardContainer.js";
import Header from "../components/Header.js";
export default class User extends React.Component{
    
    render(){
        return (
            <> 
                <Header user={this.props.user} login={this.props.login} searchForName={this.props.searchForName}/>         
                <CardContainer movies={movies} />

            </>
        )
    }
}