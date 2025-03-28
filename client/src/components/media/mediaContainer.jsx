
function MediaContainer(props) {
  const children = props.children;

  return (
    <div className="media-container">
      {children}
    </div>
  )
};

export default MediaContainer;
