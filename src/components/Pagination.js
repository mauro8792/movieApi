import React from "react";
import Number from "./Number";

export default class Pagination extends React.Component{
    state ={
        next: 10,
        prev:'',

    }
    previous =()=>{
        console.log('hola');
        
    }
    ver =(i, e)=>{
        console.log(this.state.next-1);
        e.preventDefault()
        
        this.setState=({
                next: 20
            })
        
        this.props.callApi(i)
        
    }

    
    
    create =()=>{
        let num=[]
        for (let i = 1; i < this.state.next; i++) {
            num.push( <li className="page-item"><a className="page-link" value={i} onClick={(e) => this.ver(i, e)} >{i}</a></li>) 
        }
       this.setState=({
            numeros : num
       })
        return num;
    }
    render(){
        
        
        let li = this.create();
        
        return(
            
            <>
               <ul className="pagination" style={{justifyContent: 'center'}}>
                    <li className="page-item">
                        <a className="page-link" onClick={this.previous} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {li}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
             </>
        )
    }
}