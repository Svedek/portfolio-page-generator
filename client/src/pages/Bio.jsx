
import Header from '../components/header.jsx';
import NavBar from "../components/navBar";

// 
function Bio(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main> BIO PAGE </main>
    </>
  )
};

export default Bio
