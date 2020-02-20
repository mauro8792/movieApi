import AddMovie from "../components/AddMovie.js";
import Header from "../components/Header.js";
import React from "react";

export default class Admin extends React.Component{
    render(){
        return(
            <>
            <Header user={this.props.user} login={this.props.login}/>
            <AddMovie/>
            </>
        )
    }
}