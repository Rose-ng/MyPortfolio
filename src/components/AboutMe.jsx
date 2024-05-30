import './AboutMe.css';
import profileImage from '../assets/profileimage.jpg'; 

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <img className="profile-image" src={profileImage} alt="Vanna Neang" />
        </div>
        <div className="about-right">
          <h2 className="about-title">About</h2>
          <div className="about-line"></div>
          <p className="about-description">
            Hi, I'm Vanna Neang, a UX/UI designer and web developer. I create user-centered, visually appealing interfaces and build responsive, robust websites. I thrive on turning ideas into functional and delightful digital experiences.
            <br /><br />
            <span className="highlight-text">Let's collaborate to bring your vision to life and make a lasting impact.</span>
          </p>
          <a href="resume-url.pdf" target="_blank" rel="noopener noreferrer" className="contact-info">
            <span className="phone-icon">&#128222;</span> +1 (437) 989 8579
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;