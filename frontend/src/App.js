import React, { useState, useEffect } from 'react';
import ChatComponent from './ChatComponent';
import './App.css';

function App() {
  const [currentTicket, setCurrentTicket] = useState('C-0007');
  const [nextTicket, setNextTicket] = useState('C-0008');

  // Simulate queue update every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTicketNumber = parseInt(currentTicket.split('-')[1]);
      const nextTicketNumber = parseInt(nextTicket.split('-')[1]);

      setCurrentTicket(`C-${(currentTicketNumber + 1).toString().padStart(4, '0')}`);
      setNextTicket(`C-${(nextTicketNumber + 1).toString().padStart(4, '0')}`);
    }, 10000); // Updates every 10 seconds

    return () => clearInterval(interval);
  }, [currentTicket, nextTicket]);

  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <h1>Bank for All</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>Banking for Everyone, Accessible for All</h2>
        <p>We provide accessible banking services for our valued clients who are deaf.</p>
        <div className="video-tutorial">
          <video controls>
            <source src="/my_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>Watch this video tutorial with captions and sign language interpretation.</p>
        </div>
      </section>

      {/* Queue Display Section */}
      <section className="queue-section">
        <h2>Customer Support Queue Status</h2>
        <div className="queue-display">
          {/* Customer Support Section */}
          <div className="queue-card support">
            <h3>Customer Support</h3>
            <p>Next: {nextTicket}</p>
            <p>Currently Serving: {currentTicket}</p>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="chat-section">
        <h2>Live Chat Support</h2>
        <ChatComponent />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Account Overview</h3>
            <p>Understand your account balances and transactions with ease.</p>
          </div>
          <div className="service-card">
            <h3>Money Transfers</h3>
            <p>Send and receive money securely through online transfers.</p>
          </div>
          <div className="service-card">
            <h3>Customer Support</h3>
            <p>24/7 support through video call, chat, and text-based communication.</p>
          </div>
        </div>
      </section>

      <section className="query-form-section">
  <h2>Submit a Query</h2>
  <form className="query-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Type your query here..." required></textarea>
    <button type="submit">Submit</button>
  </form>
</section>
      

      {/* Footer */}
      <footer className="footer">
        <p>Contact us at support@bankforall.com | Accessibility Information</p>
      </footer>
    </div>
  );
}

export default App;
