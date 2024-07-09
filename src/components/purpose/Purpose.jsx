import './purpose.css';
import cover from '../../assets/cover1.png';
import Divider from '../divider/Divider';
import KnowMore from '../knowButtton/KnowMore';
import { motion } from 'framer-motion';

const Purpose = () => {
  return (
    <div className="purpose">
      <div className="purposeLeft">
        <img src={cover} alt="machine" />
      </div>
      <div className="purposeRight">
        <motion.h1 animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
          <span>Our </span>
          <span>Purpose</span>
        </motion.h1>
        <Divider />
        <motion.p animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
  Our purpose at BOLE Machinery is to create an innovative and efficient injection molding environment that meets the diverse needs of our clients. We are dedicated to providing cutting-edge injection molding technology and solutions, enabling businesses to maximize their production potential. Our ultimate goal is to lead the way in adopting the latest advancements in injection molding techniques and to successfully implement them in India and globally.
</motion.p>


        <KnowMore link="https://www.bolemachinery.com/" />
      </div>
    </div>
  );
}

export default Purpose