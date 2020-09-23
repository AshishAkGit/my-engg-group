import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



const Home=(props)=> {  
    return (
      <div>         
        <div>
          <div className="carousel">
           <Carousel interval={600} keyboard={false} pauseonhover="true"> 
             <Carousel.Item style={{'height':"600px"}}>
                <img
                  style={{'height':"600px"}}
                  className="d-block w-100"
                  src="./images/dynateq_image_1.jpeg"
                  alt="First slide"
                />
               <Carousel.Caption>    
               </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{'height':"600px"}}>
                <img
                  style={{'height':"600px"}}
                  className="d-block w-100"
                  src="./images/dynateq_image_2.jpeg"
                  alt="Second slide"
                />
                <Carousel.Caption>    
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item style={{'height':"600px"}}>
                <img
                  style={{'height':"600px"}}
                  className="d-block w-100"
                  src="./images/dynateq_image_3.jpeg"
                  alt="Third slide"
                />
              <Carousel.Caption>      
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
      </div>
    </div>  
    );
  }

  export default Home
  