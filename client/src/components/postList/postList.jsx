import { useState } from "react";
import PostTableOfContents from "./postTableOfContents";
import PostItem from "./postItem";
import PostNavigator from "./postNavigator";

import "./postList.css";


function PostList(props) {
	const {
		contentsTitle,
		querry,
		numItems,
	} = props;
  
	const postsPerPage = 5;
	const querryByOffset = (offset) => 
		querry(numItems - 1 - (offset * postsPerPage), postsPerPage, -1);
	const maxOffset = Math.ceil(numItems / postsPerPage) - 1;

  const [offset, setOffset] = useState(0);
  const posts = querryByOffset(offset);

  return (
    <>
      <PostTableOfContents contentsTitle={contentsTitle} posts={posts} currentPage={offset + 1} totalPages={maxOffset + 1}/>
      {formatPosts(posts)}
      <PostNavigator maxOffset={maxOffset} offset={offset} setOffset={setOffset} />

    </>
  )
};


const formatPosts = (posts) => {
  const ret = [];
  posts.forEach((post, i) => {
    if (typeof post !== 'undefined') {
      ret[i] = <PostItem key={i} id={i} post={post} />
    };
  });
  return ret;
};


export default PostList;