import React from 'react'
import "../styles/home.css"
import Button from '../components/Button'
const Home = () => {
    
    return (
        <div className='homeContaner'>
            <div className="homeMainDiv">
                <h1>Organize Your Work and Life , Finally.</h1>
                <p>Become focused , Organized and clam with todo app . thw world #1 task management app.</p>
                <Button isNavigate={true} title="Go TODO Section"/>
            </div>
        </div>
    )
}

export default Home