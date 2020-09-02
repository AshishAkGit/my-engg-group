import React from "react";
import Owners from './Owners'

const Contact=(props)=> {
  let content={
    English:{
      title:"Contact Details"
    },
    German:{
      title:"Kontakt details"
    }
  };
  props.language === "German" ? (content=content.German) : (content=content.English)
  return (
    <div className="contact">
        <h2>{content.title} </h2>
      <div className="container">
          <Owners/>
        </div>
    </div>
  );
}
export default Contact