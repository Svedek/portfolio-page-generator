
import Header from '../components/header.jsx';
import NavBar from "../components/navBar";

// 
function Bio(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main>
			<div class="page-subtext">
				<div class="page-section">
					<h3>Academics and Experience</h3>
					<p>
						I am currently a senior at university, majoring in computer science and minoring in both mathematics and art. Over my time in courses and working as a computer science tutor, I’ve worked with quite a few subject matters.
					</p>
					<p>
						Implementing Data Structures is probably my strongest area. It’s both an area I find interesting and the primary area I’ve been tutoring peers on for roughly 2 years now. Tutoring has been satisfying in helping others, but also great for reviewing Java and the structures themselves.
					</p>
					<p>
						Another focus was on Database Systems, where I had practice planning and implementing a small scale database with a group. Within we used SQL and MySQL to implement the actual system and necessary queries.
					</p>
					<p>
						Probably my favorite area of study has been on Compilers, the code we write becomes the programs we use. Understanding more about how our programs actually get to being run has given me a new perspective of software development as a whole.
					</p>
					<p>
						In my mathematical study, I had three primary areas of focus. The first and most in depth was on calculus and its implementations in 2 and 3 dimensional space. The second was on Physics and its relation to calculus. The most recent area has been Mathematical Computer Modeling, where I take data about specific scenarios and create programs to model trends and takeaways.
					</p>
					<p>
						A personal focus of mine has been on Web Development in sites like this and my web adventure Victory! discussed further on the projects page. I have taught myself HTML and CSS for basic web page implementation. More recently, I began with Javascript to add additional interactivity to my web pages.
					</p>
				</div>
				
				<div class="page-section">
					<h3>My Interests</h3>
					<p>
						Taking my recent Introduction to Compilers course has sparked an interest in understanding how our software goes from essentially a text file to machine runable code. As I’ve come to understand the entire compilation process more, specifically how the different stages of compilers work together, I find myself excited at the idea of continuing working on them.
					</p>
					<p>
						Another longer running interest has been in video game development, I love to come up with silly little game ideas and make people smile with them. I don’t expect to ever be working full time on game development, but I also don’t see myself ever dropping it as a hobby.
          </p>
        </div>
				
				<div class="page-section">
					<h3>Where I'm Going</h3>
					<p>
						I'm currently looking for employment in this upcoming summer and post my graduation this Fall. I'm most interested in software development, though I'm quick to pick up on new things and love learning about the whole process from hardware to systems to high level programming.
					</p>
					<p>
						I am also considering furthering my education post graduation if both resources and time allows, potentially studying more into compiler technology. This however is still some time off, I have to do some more looking and thinking before deciding what specifically I want to continue studying.
					</p>
				</div>
			</div>
			
			<footer>
				<p><a href="#page-head">Top</a></p>
			</footer>
        </main>
    </>
  )
};

export default Bio
