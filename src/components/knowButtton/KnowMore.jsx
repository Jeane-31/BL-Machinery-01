import './knowmore.css';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const KnowMore = ({link=""}) => {
    return (
        <a className="knowmore" href={link} target='__blank'>
            Know More 
            <BsFillArrowRightCircleFill color='black' size={30}/>
    </a>
  )
}

export default KnowMore