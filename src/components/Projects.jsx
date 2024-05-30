import './Projects.css';

const ProjectsPage = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-description">
          Discover my portfolio of UX/UI designs and web development, highlighting user-friendly and visually engaging digital experiences.
        </p>
        <div className="projects-list">
          <div className="project-item">
            <div className="project-image" style={{ backgroundColor: '#FFFFE0' }}></div>
            <h2 className="project-title">ABC</h2>
            <p className="project-subtitle">Project 1</p>
          </div>
          <div className="project-item">
            <div className="project-image" style={{ backgroundColor: '#FFC0CB' }}></div>
            <h2 className="project-title">XYZ</h2>
            <p className="project-subtitle">Project 2</p>
          </div>
          <div className="project-item">
            <div className="project-image" style={{ backgroundColor: '#D8BFD8' }}></div>
            <h2 className="project-title">123</h2>
            <p className="project-subtitle">Project 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;