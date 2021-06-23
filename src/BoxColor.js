// const rgbToHex = (r, g, b) =>
//   '#' +
//   [r, g, b]
//     .map((x) => {
//       const hex = x.toString(16);
//       return hex.length === 1 ? '0' + hex : hex;
//     })
//     .join('');

// console.log(rgbToHex(255, 0, 0)); // '#0033ff'
function BoxColor(props) {
  return (
    <div
      className="color"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      {' '}
      <p className="text">
        {' '}
        rgb({props.r},{props.g},{props.b}){' '}
      </p>{' '}
    </div>
  );
}

export default BoxColor;
