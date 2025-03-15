import Header from '../components/header.jsx'
import NavBar from "../components/navBar.jsx";

// 
function Projects(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main> PROJECTS PAGE </main>
    </>
  )
};

export default Projects
