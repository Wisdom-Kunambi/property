import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper" id='getstarted'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get Started with Kioo</span>
                <span className="secondaryText">Subscribe and find super attractive price quotes from verified real estate agents.
                    <br />
                    Find your Residencies soon
                </span>
                <button className="button">
                    <a href="mailto:kunambiwaziri1@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted