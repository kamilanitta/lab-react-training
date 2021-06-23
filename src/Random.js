function Random(props) {
  return (
    <div className="d-flex card-box">
      <p>
        Random value between {props.min} and {props.max} {'=>'}
        {Math.floor(Math.random() * props.max + props.min)}
      </p>
    </div>
  );
}

export default Random;
