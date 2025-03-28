
const formatLinks = (links) => {
  const ret = [];
  links.forEach((link, i) => {
    i *= 2;
    if (typeof link !== 'undefined') {
      if (i-1 > 0)  ret[i-1] = " | ";
      ret[i] = <a key={i} href={link.url} target="_blank">{link.text}</a>
    };
  });
  return ret;
};

function PostItem(props) {
  const id = props.id;
  const postTitle = props.post.title;
  const postDate = props.post.date;
  const postLinks = props.post.links;
  const postBody = props.post.body;

  return (
    <article id={`post-${id}`}>
      <header>
        <h2 className="post-head">{postTitle}</h2>
        <h6 className="post-subtext">{postDate}</h6>
      </header>
      <div className="post-body">
        <div>
          {formatLinks(postLinks)}
        </div>
        {postBody}
      </div>
    </article>
  )
};

export default PostItem;
