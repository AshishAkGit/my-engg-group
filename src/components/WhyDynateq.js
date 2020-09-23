import React from "react";

const WhyDynateq=(props)=> {
  let content={    
      title:"Why Dynateq?",
      description1:"Dynateq Consulting Pvt.Ltd., although recently incorporated, draws from the long and successful industry experience of its directors. Cumulatively the company can boast of more than a 100 years experience across the length, breadth and depth of the industry as in: ",
      title2:"Over the years the directors have gained expertise in the following domains: "
     };  
   let todoList=[
       {id:1,item:"Hands on working to leadership positions - Design engineers to project managers to operations head to CEO"},
       {id:2,item:"Small scale Indian companies to global multinationals - < $1 Mil > $100 Billion annual revenues"},
       {id:3,item:"As a customer, as a supplier, as a service provider"},
       {id:4,item:"With owner based companies to publicly owned organizations"},
       {id:5,item:"In India/Asia and in 4 other continents"},
       {id:6,item:"In technical roles, in commercial roles and in techno-commercial roles"}
   ]  

   let tasksList=[
    {id:1,item:"Creating and understanding product requirements "},
    {id:2,item:"Product design and process planning"},
    {id:3,item:"Detailed engineering from conceptualization to realization"},
    {id:4,item:"Production processes - manual, semi automatic and fully automatic systems "},
    {id:5,item:"Program and project management"},
    {id:6,item:"Supplier and customer management"},
    {id:7,item:"Quality standards"},
    {id:8,item:"IT systems, including various ERP software"}
   ]

   const  RenderTableData=(props) =>{       
    return props.data.map((item) => {      
       return (          
          <li style={{textAlign :'left'}} key={item.id}>{item.id}) {item.item}</li>                
         )
    })
 }

  return (
    <div className="container">
        <div className="row align-items-center my-5">
           <div className="col-lg-12">
             <h3 className="font-weight-bold">{content.title}</h3>
             <p>
                {content.description1}
            </p>
           <div>
               <ul>
                 <RenderTableData data={todoList}/>
                </ul>
            </div> 
            <div>
                <h3 className="font-weight-bold">{content.title2}</h3>    
            </div>
            <div>
                 <ul>
                 <RenderTableData data={tasksList}/>
                </ul>
            </div>    
            </div>
        </div>
    </div>
    
  )
}
export default WhyDynateq