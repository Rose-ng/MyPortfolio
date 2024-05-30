import './Services.css';
import uxuiIcon from '../assets/uxui-icon.png'; 
import webDevIcon from '../assets/web-dev-icon.png'; 
import productDesignIcon from '../assets/product-design-icon.png'; 

const ServicesPage = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h1 className="services-title">My Services</h1>
        <p className="services-description">
          Intuitive design and seamless development to bring your vision to life.
        </p>
        <div className="services-list">
          <div className="service-item">
            <img src={uxuiIcon} alt="UX/UI Design" className="service-icon" />
            <h2 className="service-title">UX/UI Design</h2>
            <p className="service-subtitle">Crafting user-friendly and visually appealing interfaces.</p>
          </div>
          <div className="service-item">
            <img src={webDevIcon} alt="Web Development" className="service-icon" />
            <h2 className="service-title">Web Development</h2>
            <p className="service-subtitle">Building responsive and dynamic websites.</p>
          </div>
          <div className="service-item">
            <img src={productDesignIcon} alt="Product Design Strategy" className="service-icon" />
            <h2 className="service-title">Product Design Strategy</h2>
            <p className="service-subtitle">Strategizing and designing products for success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;