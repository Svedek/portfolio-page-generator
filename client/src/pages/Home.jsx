import Header from '../components/header';
import NavBar from "../components/navBar";
import Button from '../components/button';

import { useEffect } from 'react';

// TODO import project descriptions from pseudobase
// TODO make projects clickable to directly view them
// import { querryByTitle } from '../pseudobase/projectsPseudobase'  

// The body of the page loaded by default
function Home(props) {
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
          <div className="page-section">
            <h2>Welcome!</h2>
            <p>
              I am Samuel Walsh, a driven and creative individual who graduated from the University of Wisconsin-Milwaukee with a bachelor's degree in computer science and a minor in both Studio Arts and Mathematics. I aim to utilize my acquired skills as a developer to make a positive impact on people's lives, whether that is on the scale of a few smiles, or widely helpful software!
            </p>
            <p>
              Among the technical areas I have encountered, I have found a special interest in compiler development and optimization, video game development, and web development. Despite having found areas I enjoy, I know that I have much more to explore and I am eager to learn new skills along the way!
            </p>
          </div>
          
          <br />

          <div className="page-section">
            <h2>Interesting Projects I've worked on:</h2>
            <div className="media-container">
              <div className="project-description">
                <h3>Animated 3D Renderer</h3>
                <p>
                  A modular Python program that renders an animated scene into a GIF file. The scene, meshes, lighting, shading algorithm, and frame rate of the animation can all be customized by the user.
                </p>
                <img className="media" src="assets/projects/animated3DRenderer/ballBounce.gif" />
              </div>
              <div className="project-description">
                <h3>COOL Compiler</h3>
                <p>
                  A bootstrapping compiler, written in COOL and compiling COOL into MIPS assembly language. Built from scanner to code generation using JFlex scanning and Yacc for and parsing.
                </p>
              </div>
            </div>

          </div>
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
}

export default Home
