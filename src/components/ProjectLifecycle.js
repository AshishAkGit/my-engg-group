import React from "react";

const ProjectLifecycle=(props)=> {
  let content={    
      title:"Project Lifecycle:",
      description:"Dynateq can help you save on this timeline……… and with better results!!!",
      description1:"Product offered to Customer",
      duration:"300 days"
     };

  let data =[
    {id:1, task:"Project Idea/ requirement", duration:"20 days"},
    {id:2, task:"Initial Study", duration:"25 days" },
    {id:3, task:"RFQ", duration:"15 days" },
    {id:4, task:"Bids receipt", duration:"30 days" },
    {id:5, task:"Suppliers alignment", duration:"30 days" },
    {id:6, task:"Cost bids", duration:"15 days" },
    {id:7, task:"Order award", duration:"15 days" },
    {id:8, task:"Design Approval", duration:"30 days" },
    {id:9, task:"Manufacturing and proving", duration:"60 days" },
    {id:10, task:"SOP and debugging", duration:"30 days" }
  ]

  function renderTableData() {
    return data.map((data, index) => {
       const { id, task,duration } = data //destructuring
       return (
          <tr key={id}>
             <td className="rcorners1">{task}</td>
             <td className="rcorners2">{duration}</td>             
          </tr>
       )
    })
 }

  return (
    <div className="projectlifecycle">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <h3 className="font-weight-bold">{content.title}</h3>
            <table>
              <tbody>
                {renderTableData()}
              </tbody>
            </table>
          </div>
          <div className="col-lg-5">   
            <div>
            <img  alt="" src="./images/dynateq_image_6.jpeg" width="30%"></img> 
             </div>        
            <p className="border-box">
              {content.description}
            </p>
            <p>
              <span className="border-box">{content.description1}</span> =
              <span className="border-box-bg">{content.duration}</span>
            </p>            
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectLifecycle