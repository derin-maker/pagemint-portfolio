export default function Work() {
  const projects = [
    {
      name: "Blaire's Catering & Services",
      description: "A full catering website with menu, booking and testimonials.",
      image: "/blaires-mockup.png",
      link: "https://derin-maker.github.io/blaires-catering/",
      tags: ["HTML/CSS", "Mobile Responsive", "Calendly Integration","React"],
    },
  ];

  return (
    <section id="work" className="work">
      <h2 data-aos="fade-up">My Work</h2>
      <p className="work-sub" data-aos="fade-up">
        A growing portfolio of clean, purposeful websites
      </p>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div
            className="work-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="work-image">
              <img src={project.image} alt={project.name} />
              <div className="work-overlay">
                <a href={project.link} target="_blank" rel="noreferrer" className="view-btn">
                  View Site
                </a>
              </div>
            </div>
            <div className="work-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="work-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}