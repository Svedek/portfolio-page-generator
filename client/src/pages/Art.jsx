import Header from '../components/header.jsx';
import NavBar from "../components/navBar.jsx";
import Button from '../components/button';

import { useEffect } from 'react';

// 
function Art(props) {
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
        <div className="page-subtext">
          <p>Under Construction.</p>
        </div>
			
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

export default Art
