import Header from '../components/header.jsx'
import NavBar from "../components/navBar";

// 
function Art(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main> ART PAGE </main>
    </>
  )
};

export default Art
