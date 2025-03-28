import { useState } from "react";
import Button from "../button";


const onClick = () => {
  window.scrollTo(top);
}

function PostNavigator(props) {
  const {
    maxOffset,
    offset,
    setOffset
  } = props;

  return (
    <nav className="post-navigator">
      <Button onClick={() => {onClick(); setOffset(0)}} disabled={offset <= 0} >
        &lt;--First
      </Button>
      <Button onClick={() => {onClick(); setOffset(offset - 1)}} disabled={offset <= 0} >
        &lt;-Prev
      </Button>
      <div>
        Page {offset + 1} of {maxOffset + 1}
      </div>
      <Button onClick={() => {onClick(); setOffset(offset + 1)}} disabled={maxOffset <= offset} >
        Next-&gt;
      </Button>
      <Button onClick={() => {onClick(); setOffset(maxOffset)}} disabled={maxOffset <= offset} >
        Last--&gt;
      </Button>
    </nav>
  )
}


export default PostNavigator;