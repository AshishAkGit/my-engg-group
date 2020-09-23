import React from "react";

const Mission=(props)=> {
  let content={    
      title:"Mission",
      description:"Dynateq will partner with the industry to establish best products and practices to make India a major exporter of technology products. This will be achieved through dedicated and focused team with cumulative industry experience of more than 100 years.",
      description2:"DynateQ Consulting Pvt. Ltd. Will lend it’s Knowledge, Wisdom, Experience AND Innovation to Assist and guide you to achieve your business goals"             
    };
  
  return (
    <div className="mission">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <img  alt="" src="./images/dynateq_image_4.jpeg" width="100%"></img>
          </div>
          <div className="col-lg-5">
            <h3 className="font-weight-bold">{content.title}</h3>
            <p>
             {content.description}
            </p> 
            <p className="mission-desc">
              {content.description2}
            </p>       
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mission