export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content" data-aos="fade-up">
        <h2>Let's Work Together</h2>
        <p>
          Got a business that needs a website? Reach out and let's talk. No
          pressure, no jargon — just a straightforward conversation about what
          you need.
        </p>
        <div className="contact-info-card">
          <div className="contact-info-item">
            <span className="contact-info-icon">🕐</span>
            <div>
              <p className="contact-info-label">Response time</p>
              <p className="contact-info-value">Under 3 hours</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            <div>
              <p className="contact-info-label">Based in</p>
              <p className="contact-info-value">Lagos, Nigeria</p>
            </div>
          </div>
          
          
        </div>
        <div className="available-badge">
          <span className="available-dot"></span>
          Currently taking new clients
        </div>
        <div className="contact-options">
          <a
            href="https://wa.me/2348000000000"
            className="cta-btn"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
          <div className="contact-container">
          <a href="mailto:pagemint01@gmail.com" className="contact-link">
            <img src="/gmail.png" alt="Email" className="contact-icon" />
          </a>
          <a
            href="https://instagram.com/pagemintweb"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/IG.jpg" alt="Instagram" className="contact-icon" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}