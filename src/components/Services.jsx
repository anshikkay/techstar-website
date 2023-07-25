import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assests/images.png"
import img2 from "../assests/a.jpg"
const Services = () => {
  return (
    <div className="Services">
    <Carousel infinteLoop autoPlay showStatus={false} showArrows={false}
    interval={1000}>



        <div>
            <img src={img1} alt="item1" />
            <p className="legend">Full stack</p>
        </div>
        <div>
            <img src={img2} alt="item2" />
            <p className="legend">peer-to-peer support</p>
        </div>
    </Carousel>
    </div>
  )
}

export default Services