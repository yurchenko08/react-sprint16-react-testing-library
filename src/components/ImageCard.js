function ImageCard() {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px 0" }}>
      <img
        src="../../images/banner-cat2.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Whiskers</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>        
      </div>
    </div>
  );
}

export default ImageCard;
