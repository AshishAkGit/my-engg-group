import React from "react";


const Divisions=()=>{
    let content={
      title:"Divisions",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    };
    return(
        <div className="divisions">            
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                      <img  alt="" src="./images/dynateq_image_placeholder.jpeg" width="80%"></img>                     
                    </div>
                    <div className="col-lg-5">
                        <h3>{content.title} </h3>
                        <p><span className="img-container">{content.description}</span></p>
                    </div>
                 </div>
             </div>
        </div>            
    )
}

export default Divisions