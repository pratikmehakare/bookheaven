// AboutPage.js
import React from "react";
import "./About.css";
import Navbar2 from "./Navbar2";

const About = () => {
  return (
    <div>
      <Navbar2 />
      <section className="about-us">
        <div className="about-us-content">
          <h2>Welcome to BookHeaven</h2>
          <p>
            At BookHeaven, we are passionate about connecting readers with a
            world of knowledge and imagination. Whether you're delving into the
            complexities of computer science or escaping into the vibrant pages
            of comics, we have carefully curated a collection that caters to
            every taste and interest.
          </p>
          <p>
            Our journey began with a simple vision — to create a haven for book
            enthusiasts, where the pursuit of knowledge meets the joy of
            storytelling. We believe that books have the power to inspire,
            educate, and transport readers to new realms.
          </p>
          <p>
            Explore our extensive selection of genres, from cutting-edge
            computer science titles that keep you at the forefront of technology
            to captivating comics that bring stories to life with vivid
            illustrations. BookHeaven is more than just a bookstore; it's a
            community of avid readers, learners, and dreamers.
          </p>
          <p>
            Join us in this literary journey as we celebrate the boundless world
            of books. Whether you are a seasoned scholar, a comic connoisseur,
            or a casual reader, BookHeaven is your destination for discovery and
            delight.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
