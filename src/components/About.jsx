import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content" data-aos="fade-up">
        <div className="about-text">
          <h2>The Architect Behind the Code</h2>
          <p>
            Hey there, I'm Derinsola, a software engineering student and the person behind PageMint. I build
            clean, modern websites for small businesses that want a strong online
            presence without the agency price tag.
          </p>
        
          <p>
            I believe every business, no matter the size, deserves a website it's
            proud of. So I keep things simple, affordable, and focused on what
            actually matters — getting you online and looking good.
          </p>
        </div>
        <div className="about-image">
          <img src="/derin-image.jpg" alt="Derinsola" />
        </div>
      </div>
    </section>
  );
}