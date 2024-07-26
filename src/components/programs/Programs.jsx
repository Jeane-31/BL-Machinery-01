import Divider from '../divider/Divider';
import ProgCard from './ProgCard';
import './programs.css';
import imgg from '../../assets/machine1.png'
import imgg1 from '../../assets/twoo.png'
import imgg2 from '../../assets/FEE.png'
import imgg3 from '../../assets/one.png'
import { motion } from 'framer-motion';

const Programs = () => {
  return (
    <div className="programs" id='products'>
      <motion.h1 animate={{ x: [-200, 0] }} transition={{ duration: 2 }}>
        <span>Our </span>
        <span>Products</span>
      </motion.h1>
      <Divider />
      <div className="progCards">
        <ProgCard image={imgg} title="DK Series" />
        <ProgCard image={imgg1} title="EKH Series" />
        <ProgCard image={imgg2} title="FE Series" />
        <ProgCard image={imgg3} title="EKW Series" />
      </div>
    </div>
  );
}

export default Programs