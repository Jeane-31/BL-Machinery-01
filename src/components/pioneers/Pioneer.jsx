import { motion } from 'framer-motion';
import Divider from '../divider/Divider';
import PioCard from './PioCard';
import './pioneer.css';

const Pioneer = () => {
  return (
    <div className="pioneer" id='about'>
      <div className="pioLeft">
        <motion.h1 animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
          <span>Pioneers In </span>
          <span>Injection Moulding</span>
        </motion.h1>
        <Divider />
        <motion.h3 animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
          India's most desired machinery brand
        </motion.h3>
        <motion.p animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
  Welcome to BL Intelligent Machinery, your trusted partner in the world of injection moulding technology in India. As an authorized distributor of Bole Machinery, we bring you cutting-edge solutions that enhance productivity and efficiency. Our comprehensive services include sales, installation, and maintenance, ensuring that your operations run smoothly and effectively. Join us in revolutionizing the injection moulding industry with innovative and reliable machinery.
</motion.p>

<motion.p animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
  At BL Intelligent Machinery, we are dedicated to providing top-tier injection moulding machines that meet the highest standards of quality and performance. Our team of experts is committed to delivering exceptional service and support, from initial consultation to after-sales care. Explore our range of products and discover how we can help your business thrive with state-of-the-art technology and unparalleled customer service.
</motion.p>

      </div>
      <div className="pioRight">
        <PioCard logo="date" num="26+" name="Years in Machinery" />
        <PioCard logo="people" num="100+" name="Machines globally" />
        <PioCard logo="map" num="25,000+" name="Machines created" />
        <PioCard logo="globe" num="50" name="Countries" />
        <PioCard logo="weight" num="70-6800 tons" name="Clamping Forces" />
        <PioCard logo="gram" num="65-60000 grams" name="Injection Weights" />
      </div>
    </div>
  );
}

export default Pioneer