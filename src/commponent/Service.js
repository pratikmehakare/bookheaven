// ServicePage.js
import React from 'react';
import './Service.css';
import Navbar2 from './Navbar2';

const Service = () => {
    return (
        <div>
      <Navbar2 /> 
      <section className="services-page">
        <div className="services-content">
          <h2>Our Services</h2>
          <p>
            BookHeaven is more than just a bookstore; we offer a range of services to enhance your reading experience.
            Explore the benefits of being a BookHeaven member and discover how we go beyond selling books.
          </p>

          <div className="service-item">
            <h3>Personalized Recommendations</h3>
            <p>
              Our expert team curates personalized book recommendations based on your preferences and reading history.
              Rediscover the joy of reading with handpicked selections tailored just for you.
            </p>
          </div>

          <div className="service-item">
            <h3>Exclusive Events</h3>
            <p>
              Join our community for exclusive events, author meet-ups, and book signings. Immerse yourself in the world
              of literature with fellow book enthusiasts.
            </p>
          </div>

          <div className="service-item">
            <h3>Membership Benefits</h3>
            <p>
              Become a BookHeaven member to enjoy special perks, discounts, and early access to new releases.
              Unlock a world of benefits and connect with a community of avid readers.
            </p>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Service;
