export default function InProgress() {
  const projects = [
    {
      title: "PageMint",
      description:
        "My own portfolio and web design business site. Built with React + Vite, featuring dark/light mode, project filtering, Framer Motion animations, and a full contact section.",
      stack: ["React", "Vite", "CSS", "Framer Motion"],
      link: "https://pagemint-portfolio.vercel.app/",
      progress: 75,
      image: "/pagemint-hero-image.png",
      status: "Active",
      main: true,
    },
    {
      title: "Next Project",
      description: "Something new is in the works — check back soon.",
      stack: [],
      link: "#",
      progress: 0,
      status: "Coming Soon",
      main: false,
    },
    {
      title: "Next Project",
      description: "Another idea brewing — stay tuned.",
      stack: [],
      link: "#",
      progress: 0,
      status: "Coming Soon",
      main: false,
    },
  ];

  return (
    <section id="progress" className="progress-section">
      <h2 data-aos="fade-up">In Progress</h2>
      <p className="progress-sub" data-aos="fade-up">
        What I'm currently building and experimenting with
      </p>
      <div className="progress-grid" data-aos="fade-up">
        {projects.map((project, index) => (
          <div
            className={`progress-card ${project.main ? "main" : "small"}`}
            key={index}
          >
            <div className="progress-card-header">
              <div className="progress-status-badge">
                {project.status === "Active" ? (
                  <>
                    <span className="available-dot"></span>
                    {project.status}
                  </>
                ) : (
                  <>
                    <span className="coming-soon-dot"></span>
                    {project.status}
                  </>
                )}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            {project.image && (
              <div className="work-image">
                <img src={project.image} alt={project.title} />
                <div className="work-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="view-btn"
                  >
                    View Site
                  </a>
                </div>
              </div>
            )}
            {project.stack.length > 0 && (
              <div className="work-tags">
                {project.stack.map((s, i) => (
                  <span className="tag" key={i}>
                    {s}
                  </span>
                ))}
              </div>
            )}
            <div className="progress-bar-container">
              <div className="progress-bar-header">
                <span className="progress-label">Progress</span>
                <span className="progress-value">{project.progress}%</span>
              </div>
              <div className="progress-bar-track">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
