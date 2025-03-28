import { Link } from "react-router-dom";

// Nav bar towards the top of the page
function NavBar() {

  return (
    <nav>
      <ul className="nav-menu">
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/bio">Bio</Link> </li>
        <li> <Link to="/blog">Blog</Link> </li>
        <li> <Link to="/projects">Projects</Link> </li>
        {/* <li> <Link to="/art">Art</Link> </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
