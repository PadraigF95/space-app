import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="Home-Container">
            <div className="first-sentence">
                <p className="travel-to">So, you want to travel to</p>
                <span classname="space">SPACE</span>
            
            </div>

            <div className="second-sentence">
                <p className="first-paragraph">Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>

            </div>

            <div className="third-sentence">
                <span className="dot"><p className="explore">EXPLORE</p></span>
            </div>
            
        </div>
    )
}

export default Home
