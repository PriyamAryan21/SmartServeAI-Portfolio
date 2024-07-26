import React from 'react';
import "./FAQ.css"

export default function FAQ() {
  return (
    <>
        <div class="faq-container">
            <div class="header-section">
                <h1 className='firstHeader'>FAQs</h1>
                <h2 className="secondHeader">Ask us anything</h2>
                <p className="paragraph">Have any questions? We're here to assist you.</p>
                <div class="search-bar">
                    <input type="text" placeholder="Search here"/>
                </div>
            </div>
            <div class="faq-grid">
                <div class="faq-item">
                    <span class="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div class="faq-item">
                    <span class="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div class="faq-item">
                    <span class="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div class="faq-item">
                    <span class="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div class="faq-item">
                    <span class="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
                <div class="faq-item">
                    <span class="icon">✉️</span>
                    <h3 className="thirdHeader">Lorem Ipsum Dolor Sit Amet,</h3>
                    <p className="paragraph">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. A Rhoncus Nisi, Diam Elementum Amet Felis Nibh. Pulvinar Elementum Ornare Pharetra Leo</p>
                </div>
            </div>
            <div class="contact">
                <p className="paragraph">Still have questions?</p>
                <p className="paragraph">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <button className='contact-btn'>Get in touch</button>
            </div>
        </div>
    </>
   )
}
            