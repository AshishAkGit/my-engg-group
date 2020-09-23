import React from "react";
import Map from './Map'

const Locations=()=>{
    let content={
      title:"Current Location:",
      companyname:"Dynateq Consulting Pvt LTD.",
      address:"Flat No 3, Bld E-1 Shanti Heights,Near Eklavya College, DP Road Kothrud",          
      city:"Pune",
      pincode:"411038", 
      country:"India",  
    };    
 
    return(
           <div className="container">
                <div className="row align-items-center my-6">
                   <div className="col-lg-7">                
                    <Map/>
                    </div>
                   <div className="col-lg-5 border-box-bg">
                        <h3>{content.title} </h3>                       
                        <p>{content.companyname}</p>
                        <p>{content.address}</p>         
                        <p>{content.city} - {content.pincode}</p>
                        <p>{content.country}</p>                        
                    </div>
                 </div>
             </div>                  
         )
    }

export default Locations
