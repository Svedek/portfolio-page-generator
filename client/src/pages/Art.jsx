import Header from '../components/header.jsx'
import NavBar from "../components/navBar";

// 
function Art(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main>
        <div class="page-subtext">
          <p>Under Construction.</p>
        </div>
			
        <footer>
          <p><a href="#page-head">Top</a></p>
        </footer>
      </main>
    </>
  )
};

export default Art
