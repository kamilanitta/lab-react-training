function IdCard(props) {
  return (
    <div className="d-flex card-box">
      <div className="id-box">
        <img src={props.picture} alt="" />
      </div>
      <div className="id-box">
        <span>
          <strong>First Name:</strong> {props.firstName}
        </span>
        <br></br>
        <span>
          <strong>Last Name:</strong> {props.lastName}
        </span>
        <br></br>
        <span>
          <strong>Gender: </strong>
          {props.gender}
        </span>
        <br></br>
        <span>
          <strong>Height:</strong> {props.height}
        </span>
        <br></br>
        <span>
          <strong>Birth:</strong> {props.birth}
        </span>
      </div>
    </div>
  );
}

export default IdCard;
