
const formatPosts = (posts) => {
  const ret = [];
  posts.forEach((post, i) => {
    if (typeof post !== 'undefined') {
      ret[i] =
          <li key={i}>
            <a href={`#post-${i}`}> {post.title} </a>
          </li>;
    };
  });
  return ret;
};

function PostTableOfContents(props) {
	const {
		contentsTitle,
		posts,
		currentPage,
		totalPages,
	} = props;

  return (
    <div className="page-subtext">
      <div className="page-section">
        <h2>{contentsTitle}:&nbsp;Page {currentPage} of {totalPages}</h2>
        <ul className="contents-list">
          {formatPosts(posts)}
        </ul>
      </div>
    </div>
  )
};

export default PostTableOfContents;
