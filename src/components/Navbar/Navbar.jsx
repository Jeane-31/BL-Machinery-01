import './Navbar.css';
import logo from '../../assets/bllogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <img src={logo} alt="BlMachinery" />
        <span>BL</span>
        <span>Machinery</span>
      </div>
      <div className="navRight">
        <div className="navLinks">
          <a className="navLink" href='#home'>
            Home
          </a>
          <a className="navLink" href='#about'>
            About Us
          </a>
          <a className="navLink" href='#products'>
            Products
          </a>
          <a className="navLink" href='#contact'>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar