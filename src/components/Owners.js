import React from 'react'

const contactDetails=[
    {
    img:'./images/engg-grp-img2.jpeg',
    designation:'Manager',
    name:'Parikshit Karmarkar',
    address:'Talegaon MIDC',
    phone:'91-20-6455000',
    email:'parikshit.karmarkar@abc.com'
}
]
const Owners=()=>{
return( 
     contactDetails.map((item,index)=>(
        <div className="row align-items-center my-5" key={index}>
        <div className="col-lg-4" >
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src={item.img}
            alt=""
          />
        </div>
        <div className="col-lg-4">
          <>
           <p><strong>{item.name}</strong></p>
           <p>{item.designation}</p>
           <p>{item.address}</p>
           <p>{item.phone}</p>
           <p>{item.email}</p>
          </>
        </div>
      </div>
    ))
 )
}
export default Owners;