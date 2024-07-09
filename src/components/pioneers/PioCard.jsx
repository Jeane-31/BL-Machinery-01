import { MdDateRange} from 'react-icons/md';
import { IoIosPeople} from 'react-icons/io';
import { FaMapLocation} from 'react-icons/fa6';
import { FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PioCard = ({logo, num, name}) => {
  return (
    <motion.div
      className="pioCard"
      animate={{ x: [200, 0] }}
      transition={{ duration: 2 }}
    >
      {logo === "date" && <MdDateRange color="#ef6c00" size={45} />}
      {logo === "people" && <IoIosPeople color="#ef6c00" size={45} />}
      {logo === "map" && <FaMapLocation color="#ef6c00" size={45} />}
      {logo === "globe" && <FaGlobeAmericas color="#ef6c00" size={45} />}
      <h1>{num}</h1>
      <h3>{name}</h3>
    </motion.div>
  );
}

export default PioCard