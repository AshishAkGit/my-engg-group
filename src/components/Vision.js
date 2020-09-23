import React from "react";

const Vision=(props)=> {
  let content={    
      title:"Vision",
      description:"To establish Dynateq as a global leader in Business process and automation consulting, simultaneous engineering and manufacturing engineering with sustained efforts over next decade/To establish Dynateq as a preferred consulting partner for improvement in returns through application of innovative and customized technical and business practices in the organization."
     };
  
  return (
    <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
              <img  className="img-fluid rounded mb-4 mb-lg-0" alt="" src="./images/dynateq_image_4.jpeg" width="100%"></img>
          </div>
          <div className="col-lg-6">
            <h3 className="font-weight-bold">{content.title}</h3>
            <p>
             {content.description}
            </p>             
          </div>
        </div>
    </div>
    
  )
}
export default Vision