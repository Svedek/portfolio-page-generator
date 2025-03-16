import Header from '../components/header'
import NavBar from "../components/navBar";

// The body of the page loaded by default
function Home(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
      <main>
        <div className="page-subtext">
          <div className="page-section">
            <h3>Hello!</h3>
            <p>
              I'm Sam, a computer science student with a particular interest in compiler technology and game development. That said, I enjoy working with and learning about just about anything tech related!
            </p>
            <p>
              Among my personal pursuits are tinkering around with small scale software, creating and interfacing with web-pages, developing video games, and working on other creative applications.
            </p>
          </div>
          
          <br />
          <h3>Interesting Projects I've worked on:</h3>
          <div className="media-container">
            <div className="project-description">
              <h3>Animated 3D Renderer</h3>
              <p>
                A Python project that takes 3D models and renders user defined animations into GIF files
              </p>
              <img className="media" src="src/assets/projects/animated3DRenderer/ballBounce.gif" />
            </div>
            <div className="project-description">
              <h3>COOL Compiler</h3>
              <p>
                A bootstrapping compiler, written in COOL and compiling COOL into MIPS assembly language. Built from scanner to code generation using JFlex and Yacc for scanning and parsing.
              </p>
            </div>
          </div>
        </div>
        
        <footer>
          <p><a href="#page-head">Top</a></p>
        </footer>
      </main>
    </>
  )
}

export default Home
