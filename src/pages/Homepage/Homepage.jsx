import Contact from '../../components/contact/Contact';
import Slider from '../../components/homeSlider/Slider';
import Imgcomp from '../../components/imgcomp/Imgcomp';
import Pioneer from '../../components/pioneers/Pioneer';
import Programs from '../../components/programs/Programs';
import Purpose from '../../components/purpose/Purpose';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Slider />
      <Pioneer />
      <Imgcomp />
      <Programs />
      <Purpose />
      <Contact />
    </div>
  )
}

export default Homepage