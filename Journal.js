import React from "react"


export default function Journal(props){
    return(
        <div className="journal">
            <img src={props.imageUrl}/>
            
            <div className="content">
                <div className="top">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{props.location}</h3>
                    <a href="{props.googleMapsUrl}">View on Google Maps</a>
                </div>
                        
                <div className="bottom">
                  <h1>{props.title}</h1>
                  <h4>{props.startDate}- {props.endDate}</h4>
                  <p>{props.description}</p>
                  
                
                </div>
             
             </div>
        
        
        </div>
    )
}