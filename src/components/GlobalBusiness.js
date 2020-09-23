import React from "react";

const GlobalBusiness=(props)=> {
  let content={    
      title:"Global business scenario:",
      description1:"In the global village, the organizations who hit the market first are more likely to succeed. In Indian context, the development cycle of any product or service is outrageously longer than many new economies. An already worked up team, working on newer projects will not be able to yield great performance. This is precisely what is understood by automotive giants and they have started outsourcing high technology tasks. But the medium industries and tier1’s can’t really follow suit due to many obstacles. Is the future grim for such organizations?",
      description2:"Certainly not.",
      description3:"Not after you engage with Dynateq Consulting private Limited. We help you squeeze timelines by lending our experiential learning acquired over 100 plus years of collective experience. We also help you improve upon products and processes."
    };  

  return (
    <div className="container">
        <div className="row align-items-center my-5">
           <div className="col-lg-12">
             <h3 className="font-weight-bold">{content.title}</h3>
             <p>
               {content.description1}
            </p>     
            <div>
              <h3 className="font-weight-bold">{content.description2}</h3>
            </div>    
            <p className="font-weight-bold">
              {content.description3}
            </p>    
            <p>
                 <img  className="img-fluid rounded mb-4 mb-lg-0" alt="" src="./images/dynateq_image_7.jpeg" width="100%"></img>
            </p>          
          </div>
        </div>
    </div>
    
  )
}
export default GlobalBusiness