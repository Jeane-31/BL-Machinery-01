import './imgcomp.css';
import one from '../../assets/one.png'
import two from '../../assets/two.png'

const Imgcomp = () => {
  return (
    <div className="imgComp">
        <div className="imgg">
            <img src={one} alt="one" />
        </div>
        <div className="imgg">
            <img src={two} alt="two" />
        </div>
    </div>
  )
}

export default Imgcomp