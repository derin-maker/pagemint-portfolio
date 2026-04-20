import React from 'react';

export default function Services() {
  const packages = [
    {
      name: "Starter",
      price: "₦25,000",
      description: "Perfect for businesses that just need to get online.",
      features: [
        "1 page website",
        "Mobile responsive",
        "WhatsApp CTA button",
        "Delivered in 3 days",
      ],
    },
    {
      name: "Standard",
      price: "₦50,000",
      description: "For businesses that need more than a landing page.",
      features: [
        "Up to 5 pages",
        "Mobile responsive",
        "Contact form",
        "Delivered in 7 days",
      ],
    },
    {
      name: "Custom",
      price: "From ₦80,000",
      description: "Got something specific in mind? Let's build it.",
      features: [
        "Unlimited pages",
        "Booking integrations",
        "Gallery & portfolio",
        "Timeline based on scope",
      ],
    },
  ];

  return (
    <section id="services" className="services">
      <h2 data-aos="fade-up">What I Offer</h2>
      <p className="services-sub" data-aos="fade-up">Simple packages, no hidden fees</p>
      <div className="services-grid">
        {packages.map((pkg, index) => (
          <div
            className="service-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3>{pkg.name}</h3>
            <p className="price">{pkg.price}</p>
            <p className="description">{pkg.description}</p>
            <ul>
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" className="cta-btn">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
}