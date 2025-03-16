import Header from '../components/header.jsx'
import NavBar from "../components/navBar";

// 
function Blog(props) {
  const pageTitle = props.pageTitle;

  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar />
		  <main>
			<div class="page-subtext">
				<p>My blog where I post about projects I work on and technology I'm interested in!</p>
			</div>
            <div id="table-of-contents">
                <h2>Contents:</h2>
                <ul class="contents-list">
                    <li><a href="#post-4">Website complete!</a></li>
                    <li><a href="#post-3">Godot Wild Jam #62!</a></li>
                    <li><a href="#post-2">Blog page completed!</a></li>
                    <li><a href="#post-1">Initial post!</a></li>
                </ul>
            </div>
			
			<article id="post-4">
				<header>
					<h2 class="post-head">Website complete!</h2>
					<h6 class="post-subtext">April 28th, 2024</h6>
				</header>
				<div class="post-body">
					<p>
						It's been a lot longer since my last post than I had hoped, though I'm back!
					</p>
					<p>
						I’m writing this post right after having finished the basics of this page. The home page now provides a rough overview of my pursuits and projects. The Bio is now a somewhat thorough breakdown of my history and things I'm looking at in the future. This blog page has a nice new post I'm writing now (hi). The Projects page even got a write up for all of the recent projects I could pull together and reasonably write on. Even with all this done, I have more in mind for spicing this page up in the future. I want to create some javascript elements to sort and display blog posts and project descriptions better, potentially adding a search or at least some manner of sorting tags or filters. I also want to create a light theme toggle for the page in the case people aren’t a fan of the current theme.
					</p>
					<p>
						Among the projects I’ve added to the Project page, two big ones stick out. First is an Animated 3D Renderer made in Python. It was an interesting exploration into both how digital rendering is handled and also how to create and output animations. The other big project was a web adventure titled Victory! It is an artistic piece designed as an exploration into a specific negative emotional state and, more technically, an opportunity to teach myself Javascript interactions in web pages. There is a more indepth write up for both of these projects in their respective project posts, if you're interested please check it out!
					</p>
					<p>
						More recently, this semester has been kind of kicking my butt. That said it is also one of the most interesting times I can remember in college. The main thing that’s grabbed my interest has been an Introduction to Compilers course. In the class, we study broad compiler design while ourselves implementing a bootstrapping compiler for COOL (a subset of Scala), meaning it is written in COOL for COOL. As much as it is eating my freetime, as more pieces fall into place, I start finding more reasons to love compilers. I just can’t think of a lot of cooler or more important programs than one that literally allows all other programs to be run.
					</p>
					<p>
						As I mentioned earlier, I have some Javascript plans for this website, however I have several other projects I’m also looking into. First off, I’m speaking with the faculty running the Introduction to Compilers course about extending the usable COOL compiler, used to check your work and run your programs. The extension would enable the compiler to output to many more languages than just MIPS assembly and additionally allow students to use the compiler directly on their machine without the existing requirement of a Docker container. I’m also considering setting aside a solid month or so to go back and finish a bunch of older projects I’ve left in varying stages of completion.
					</p>
					<p>
						That's about all I have to share for now, thank you so much for reading and hopefully I’ll write about more updates soon!
					</p>
				</div>
			</article>

			
			<article id="post-3">
				<header>
					<h2 class="post-head">Godot Wild Jam #62!</h2>
					<h6 class="post-subtext">November 13th, 2023</h6>
				</header>
				<div class="post-body">
					<p>
						I joined the Godot Wild Jam #62 and made a video on the process!
					</p>
					<div class="media-container">
						<iframe class="embed-youtube" src="https://www.youtube-nocookie.com/embed/aKlwMbn-jOw?si=uLLjCPKwqcTbNYYO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
					<p>
						I have been interested in game dev-y video production for a bit now and I finally gave it a go. I learned a lot doing it, but that came at the cost of having gone about the production in a <strong>very</strong> inefficient manner. I essentially recorded every moment that I was working on the project and ended up with close to 17 hours of footage. This was a bit of a nightmare to go through when I was also getting caught up with other coursework. The jam happened to be right in the middle of midterms so I had some other obligations, as a result the game and video took a bit of a sideline for a while. I got through it though and I'm really happy with the video, however I do wish I had more time for the game itself.
					</p>
					<p>
						I am also still working on The Seeker, albeit slowly and infrequently. I plan on finishing both The Seeker and the contract reaper game, making another video of it when I continue work on the contract reaper game. That said I have no timeline for when any of this will happen. I love working on these little games, but I have a very packed semester at university and I work on these projects when I’m done with classwork and have the remaining energy to work on them.
					</p>
					<p>
						Thank you for reading, I’ll update when I have progress to share!
					</p>
				</div>
			</article>
			
			<article id="post-2">
				<header>
					<h2 class="post-head">Blog page completed!</h2>
					<h6 class="post-subtext">September 9th, 2023</h6>
				</header>
				<div class="post-body">
					<p>
						I have finally finished the main blog page (c:) and have a rough plan drawn up for the remaining pages. The stylesheets used for this blog should suit the other pages with a few tweeks, meaning they will probably come out a whole lot faster. I still want to set up an about me page, a home page, a projects page, and an art gallery page.
					</p>
          <p>
						University has also begun and thus I may not be able to work as readily on side projects, though I still plan on finishing my current game project: The Seeker. Of which I had to scale back as my vision kept growing and now I am focusing on exclusively what was in the original plan. The game will be a top-down singular boss fight with some additional stuff that I will reveal later. The player is almost entirely complete, though I still have to complete the boss, menus, sounds, transitions, and almost certainly bugs / unexpected things.
					</p>
					<p>
						I plan on updating this blog roughly twice a month, though we’ll see how that works out. I also plan on joining game jams that come up and making a lot more smaller games and projects. Either way though, I’ll update later and see where I am, thanks for reading &lt;3.
					</p>
				</div>
			</article>
			
			<article id="post-1">
				<header>
					<h2 class="post-head">Initial post!</h2>
					<h6 class="post-subtext">Posted: August 13th, 2023</h6>
				</header>
				<div class="post-body">
					<p>
						This marks day 3 of sticking to learning web development and the start of this blog. I feel like im making decent progress with HTML and CSS. I am also excited to learn more about SQL and JS.
					</p>
					<p>
						I made this website as an exercise in web development, but I'm enjoying making it and im mostly happy with how its looking.
					</p>
				</div>
			</article>
			
			<footer>
				<p><a href="#page-head">Top</a></p>
			</footer>
        </main>
    </>
  )
};

export default Blog
