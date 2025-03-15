import Header from '../components/header.jsx'
import NavBar from "../components/navBar";

// 
function Blog(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main> BLOG PAGE </main>
    </>
  )
};

export default Blog
