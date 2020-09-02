import React from 'react'

const Home=(props)=> {
  let content={
    English:{
      title:"Home",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    German:{
      title:"Zuhause",
      description:"Lorem Ipsum ist einfach ein Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 16. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere vom Typ nahm und sie zu einem Musterbuch verschlüsselte."  
    }
  };
   props.language === "German" ? (content=content.German) : (content=content.English)
    return (
      <div className="home">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="./images/engg-grp-img1.jpeg"
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">{content.title}</h1>
              <p>
                 {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home
  