import React from 'react'
import './Home.css'
import callImage from './Images/call-image.png'

export default function Home() {
  return (
    <div className='main-container'>
        <div className="cus-satisfaction">
            <h1 className='main-header'>ELEVATE CUSTOMER SATISFACTION
                WITH SMART SERVE AI
            </h1>
            <p className='feature-texts'>
                Efficient, Reliable, and Available 24/7 to Enhance 
                Your Customer Support.AI-Powered Solutions to 
                Meet Your Customer's Needs Anytime, Anywhere.
            </p>
            <button className='getStarted-btn'>Get Started</button>
        </div>
        <div className='featuresProvided'>
            <div className="features" id="Multi-Language">
                <p className='key-points'>Multi-Language Support</p>
            </div>
            <div className="features" id="Real-Time">
                <p>Real-Time Analytics</p>
            </div>
            <div className="features" id="Call-Reception">
                <p>24/7 Call Reception</p>
            </div>
            <div className="features" id="Scalability">
                <p>Scalability</p>
            </div>
            <div className="features" id="Detailed-Reporting">
                <p>Detailed Reporting</p>
            </div>
            <div className="features" id="System-Integration">
                <p>System Integration</p>
            </div>
            <img className='call-img' src={callImage} alt="Call-Image" />
        </div>
    </div>
  )
}
