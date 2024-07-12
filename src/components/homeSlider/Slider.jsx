import './slider.css';
import vid from '../../assets/logo-vid.webp';

const Slider = () => {
  return (
    <div className="slider" id="home">
      <video autoplay="autoplay" loop playsInline muted>
        <source src="/src/assets/logo-vid.webp" type="video/webm" />
        <source src="https://res.cloudinary.com/dajpvfbfm/video/upload/v1720792041/logo-vid_ggjrzq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default Slider