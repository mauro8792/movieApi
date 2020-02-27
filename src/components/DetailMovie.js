import React from "react";

export default class DetailMovie extends React.Component{
    
    render(){
        let url= "https://image.tmdb.org/t/p/w500";
        const {id, title, title_original, description, image}= this.props.viewMore;
        
        return(
            
           
               <div className='container' style={{'marginTop': '5%'}}>
                   <div className="row" >
                            <div class="col-8" style={{width: '40%', textAlign: 'center'}}>
                                <div className="card mb-3" style={{width: '50%'}}>
                                    <img className="card-img-top" src={url+image} width='10%' alt="Card image cap"/>
                                </div>
                            </div>
                            <div className="col-4">
                                
                            <div className="card mb-3" style={{width: '100%'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
        )
    }
}