import React from "react";
import YouTube from 'react-youtube';

const opts = {
    height: '400',
    width: '500',
    playerVars: {      
      autoplay: 1,
    },
  };
  const _onReady=(event)=>{
    event.target.pauseVideo()
  }
const About=(props)=> {
  let content={    
      title:"Our Story",
      para1:"Dynateq Consulting Pvt.Ltd. is established in year 2020 by a team of five like minded industry "+
      "stalwarts to cater to the ever increasing demand of automation in the industry. The directors came " +
      "together with the sole purpose of sharing their experience and knowledge with the industry to optimize "+
      "resources and to produce world class products. The board of directors come with an exposure to best "+
      "global practices and products in varied domains.",
      para2:"We, amongst us, also have many years experience in leadership positions in different "+
      "organizations, some of them built by us into a brand of repute. Together we can impart consultations " +
      "in the entire value stream of Automotive, White goods, Railway infrastructure, Passenger bus, Earth "+
      "movers, FMCG and many more industries. ",
      para3:"Our services will include, Layouts, process engineering, Simultaneous Engineering, preparation of " +
      "RFQ, Design thinking, New product development, Brown field projects, etc." 
                   
    };
  
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          <YouTube videoId="98DXe3uKwfc" opts={opts} onReady={_onReady} />
          </div>
          <div className="col-lg-5">
            <h3 className="font-weight-bold">{content.title}</h3>
            <p>
             {content.para1}
            </p>
            <p>
             {content.para2}
            </p>
            <p>
             {content.para3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About