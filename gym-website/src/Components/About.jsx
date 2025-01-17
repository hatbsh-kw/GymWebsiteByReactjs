import React from 'react'
import aboutimage from '../images/cover.jpg'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />

        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore iste asperiores 
                accusamus facilis repudiandae! Tenetur, culpa. Cumque, repudiandae dolores rem ipsa culpa,
                 nam mollitia nesciunt architecto recusandae quasi esse eius.</p>
                 <button>Read More</button>

        </div>
      
    </div>
  )
}

export default About
