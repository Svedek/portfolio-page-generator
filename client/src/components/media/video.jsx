function Video(props) {
  const src = props.src;

  return (
    <iframe className="embed-youtube" src={src} allowFullScreen />
  )
};

export default Video;
