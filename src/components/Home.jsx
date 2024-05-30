import { Link } from 'react-router-dom';
import profile from '../assets/background.jpg';
import './Home.css';

const HomePage = () => {
  return (
    <section className="u-section-1" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${profile})` }}>
      <div className="u-sheet-1">
        <h1 className="u-text-1">I<span className="highlight">'</span>m Vanna Neang<span className="highlight">.</span></h1>
        <p className="u-text-2">UX/UI Designer & Web Developer</p>
        <Link to="/about" className="u-text-3">Learn more about me</Link>
      </div>
    </section>
  );
};

export default HomePage;