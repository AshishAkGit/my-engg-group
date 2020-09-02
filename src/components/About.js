import React from "react";
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {      
      autoplay: 1,
    },
  };
  const _onReady=(event)=>{
    event.target.pauseVideo()
  }
const About=(props)=> {
  let content={
    English:{
      title:"About",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    German:{
      title:"Über",
      description:"Lorem Ipsum ist einfach ein Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum ist seit dem 16. Jahrhundert der Standard-Dummy-Text der Branche, als ein unbekannter Drucker eine Galeere vom Typ nahm und sie zu einem Musterbuch verschlüsselte."  
    }
  };
  props.language ==="German" ? (content = content.German) : (content = content.English)
  
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <YouTube videoId="98DXe3uKwfc" opts={opts} onReady={_onReady} />
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
export default About