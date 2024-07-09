
const ProgCard = ({image, title}) => {
  return (
    <div className="progCard">
      <div className="progCardImg">
        <img src={image} alt="image" />
      </div>
      <div className="progCardTitle">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ProgCard