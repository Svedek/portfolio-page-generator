import Header from '../components/header.jsx';
import NavBar from "../components/navBar.jsx";
import Button from '../components/button';
import { querry, numItems } from '../pseudobase/projectsPseudobase.jsx';
import PostList from '../components/postList/postList.jsx';

import { useEffect } from 'react';

// 
function Projects(props) {
  const {
    pageTitle,
  } = props;

  useEffect(() => {
    document.title = pageTitle || "";
  }, [pageTitle]);

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main>

				<PostList contentsTitle="Projects" querry={querry} numItems={numItems} />
				
				<footer>
          <p>  {/* TODO FIX THIS (needs <p> around button to be properly spaced) */}
            <Button onClick={() => {window.scrollTo(top)}}>
              Top
            </Button>
          </p>
				</footer>
			</main>
    </>
  )
};

export default Projects
