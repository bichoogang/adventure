import React from 'react'
import v1 from './videos/v2.mp4'
function Home() {
    return (
        <div className="home ">
            <div >
                <video src={v1} autoPlay loop muted className="w-full object-cover h-screen "/>
            </div>
            <div className="hdet">
                <h1>BE READY FOR <br/> A BREATHTAKING EXPERIANCE </h1>
                <p>I'm a paragraph. Click here to add your own text and edit me.<br/> It’s easy. Just click “Edit Text” or double click me to add your <br/> own content and make changes to the font.</p>
                <button>Book Now</button>
              
            </div>

        </div>
    )
}

export default Home
