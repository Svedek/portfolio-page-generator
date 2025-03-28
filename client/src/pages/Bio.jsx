
import Header from '../components/header.jsx';
import NavBar from "../components/navBar";
import Button from '../components/button';

import { useEffect } from 'react';

// 
function Bio(props) {
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
					<h2>Who am I?</h2>
					<p>
						I am Samuel Walsh, a driven and creative graduate of the University of Wisconsin-Milwaukee with a bachelor's degree in computer science and a minor in both Studio Arts and Mathematics. Throughout my journey, I have enjoyed learning creative skills such as drawing and writing as well as engaging in more technical areas, such as compiler development and optimization, video game development, and web development. I aim to utilize my acquired skills as a developer and as a creative to make a positive impact on people's lives, whether that is on the scale of a few smiles, or widely helpful software! 
					</p>
				</div>

				<div className="page-section">
					<h2>Academics and Experience</h2>
					<p>
						I graduated from the University of Wisconsin-Milwaukee in the winter of 2025 with a bachelor's of science in computer science as well as a minor in both Studio Arts and Mathematics.In my time as a student, I worked for the University of Wisconsin-Milwaukee as both a computer science tutor and as an assistant in writing the homework for the Data Structures and Algorithms course.
					</p>
					<p>
						While at the University of Wisconsin-Milwaukee, I joined the Institute of Electrical Engineers - Computer Society (IEEE-CS) club and quickly rose to being an officer of the program. As an officer, I learned to collaborate with other engineers to introduce an interesting technical concept to an audience with varying technical experience.
					</p>
				</div>
				
				<div className="page-section">
					<h2>Personal Interests</h2>
					<p>
						Learning more about compilers sparked an interest in learning more about how programming languages work as well as a desire to create a new programming language. I have also found indie video games fascinating and have started to get into video game development as a hobby. Finally, when I'm looking to unwind, I love to sketch and write.
          </p>
        </div>
				
				<div className="page-section">
					<h2>Where I'm Going</h2>
					<p>
						I am currently looking for technical jobs, especially software engineering or software development positions to explore possibilities and expand my skill set while putting my knowledge to good use.
					</p>
					<p>
						More personally, I am working to realize some smaller video games and creative projects, hopefully making some smiles along the way.
					</p>
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
};

export default Bio
