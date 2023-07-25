import React from 'react'
import vg from '../assests/pp.jpg';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1>TechStar</h1>
            <p>Solution to all yours problems</p>
        </main>
    </div>
    <div className="home2">
    <img src={vg} alt="Graphics"/>
      <div>
        <p>
          We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus molestias, nulla adipisci accusantium illo maxime blanditiis dolores saepe provident voluptatibus totam, minima magni non incidunt illum fugit nesciunt. At.</p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>
           Brands
          </h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}}>
              <AiFillInstagram/>
              <p>Instgram</p>
            </div>
          </article>
        </div>
      </div>
    
    </>
  )
}

export default Home