import React from "react";

export default class Number extends React.Component{
    
    


    
    render(){
        
        return(
            
            <>
              {this.props.create()}
            </>
        )
    }
}