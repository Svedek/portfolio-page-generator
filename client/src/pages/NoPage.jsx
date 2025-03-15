import Header from '../components/header.jsx'
import NavBar from "../components/navBar";

// 
function NoPage(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
      <main> NO PAGE </main>
    </>
  )
};

export default NoPage
