import React from 'react'
import './Home.css'
import callImage from "./Images/call-image.png"

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
        <div class="container">
        <img src={callImage} alt="Call-Image" class="main-image"/>
        <div class="box real-time-analytics">Real-Time Analytics</div>
        <div class="box multi-language-support">Multi-Language Support</div>
        <div class="box system-integration">System Integration</div>
        <div class="box call-reception">24/7 Call Reception</div>
        <div class="box detailed-reporting">Detailed Reporting</div>
        <div class="box scalability">Scalability</div>
      </div>
    </div>
  )
}
