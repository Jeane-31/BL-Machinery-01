import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerList">
          <h3 className="footerListItem">About Us</h3>
          <a href="#">Home</a>
          <a href="#">About Us</a>
        </div>
        <div className="footerList">
          <h3 className="footerListItem">More</h3>
          <a href="#">Machines</a>
          <a href="#">BLMachinery Club</a>
          <a href="#">Consult Us</a>
        </div>
        <div className="footerList">
          <h3 className="footerListItem">Connect</h3>
          <a href="#">Media</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footerList">
          <h3 className="footerListItem">Franchise</h3>
          <a href="#">Get your own machine</a>
        </div>
          </div>
          <hr />
          <div className="footerBot">
              <div className="footCopy">
                  <h3>Copyright &copy; 2024 BLMachinery Private Limited</h3>
              </div>
          </div>
    </div>
  );
}

export default Footer