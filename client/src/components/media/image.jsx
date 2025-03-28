function Image(props) {
  const src = props.src;

  return (
    <img className="media" src={src} />
  )
};

export default Image;
