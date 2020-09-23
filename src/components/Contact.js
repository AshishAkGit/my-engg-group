import React from "react";
import SocialFollow from "./SocialFollow";
import UserForm  from './UserForm'

const Contact=(props)=> {
  let content={            
           type:'Visiting Address',
           address:"Flat No 3, Bld E-1 Shanti Heights,Near Eklavya College, DP Road Kothrud",          
           city:"Pune",
           pincode:"411038", 
           country:"India",         
           contact:'Communication',    
           telephone:" +91 020 222 26262",
           fax : "+91 020 222 26222",
           email:"abc@dynateq.com",
           social:"We are on social",  
           form:"Fill the form"                              
  };
  
  return (
    <div className="contact">
      <div className="container">
      <div className="row align-items-center my-6">
          <div className="col-lg-6">
          <h3 className="font-weight-bold">{content.type}</h3>
            <p>
              <p>{content.address}</p>         
              <p>{content.city} - {content.pincode}</p>
              <p>{content.country}</p>
            </p>
          </div>
          <div className="col-lg-6">
            <h3 className="font-weight-bold">{content.contact}</h3>
            <p>
               <p>{content.telephone}</p>
               <p>{content.fax}</p>
                <p>{content.email}</p>             
            </p>
          </div>
        </div>
        <div className="row align-items-center my-6">
          <div className="col-lg-6">
          <h3 className="font-weight-bold">{content.social}</h3> 
            <SocialFollow/>          
          </div>
          <div className="col-lg-6">
            <h3 className="font-weight-bold">{content.form}</h3>
            <UserForm/>
          </div>
        </div>
        </div>
    </div>
  );
}
export default Contact