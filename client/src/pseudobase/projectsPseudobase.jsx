import { TAGS, linkObj } from './pseudobase';
import Video from '../components/media/video';
import MediaContainer from '../components/media/mediaContainer';
import Image from '../components/media/image';


const IN_DEVELOPMENT = "In Development";

const table = [
  {  // 0
    title: "Homie Quest!",
    startDate: "December 2021",
    date: "July 2022",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/HomieQuest"),
            linkObj("itch.io Page", "https://svedek.itch.io/homie-quest")],
    body:
      <>
        <p>
          Homie Quest! was the first real game and personal project I ever set out to complete. It is a 2D platformer made in the Unity Engine with combat and abilities to unlock.
        </p>
        <p>
          The original concept for Homie Quest! planned for 4 stages of 4 levels each, though only the first 2 stages were ever completed. Unfortunately, by the time I made it to working on stage 3, the poor design decisions I made as a new developer started becoming more prohibitive of new content. Ultimately the work required to introduce stage 3 in any way I could be proud of would require re-doing far too much of the game. There was a lot I learned however and I decided it would be more productive to polish up the first 2 stages and upload it as a complete project. 
        </p>
        <p>
          I had briefly tried my hand with the Unity Engine several times up to this point, but never really stuck to it until I came up with the idea for Homie Quest! The main concept I loved was the chakram ability introduced between stage 1 and 2. The other abilities would be a dash and double jump, which when combined with the chakram would allow for quite complex and creative movement.
        </p>
        <p>
          Though its not something I believe will happen for some time now, I do plan on revisiting Homie Quest! eventually. Until then, I still have more to learn.
        </p>
      </>,
    tags: [],
  },
  {  // 1
    title: "Gamer Arena!",
    startDate: "July 2022",
    date: "September 2022",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/RoguelikeArena"),
            linkObj("itch.io Page", "https://svedek.itch.io/gamer-arena")],
    body:
      <>
        <p>
          Gamer Arena is a top down roguelike shooter where the player is confronted with procedurally generated levels and enemies scaled with the game time and floor the player is on. In order to beat the curve, the player is rewarded with gold and experience for clearing enemies, offering new weapons and stat boosts.
        </p>
        <p>
          Gamer Arena is a very visually simple game, having come right out of Homie Quest, I was somewhat art-ed out and wanted to focus on developing gameplay in a smaller scale project. As a result of this, nearly the whole game is boxes, capsules, and text.
        </p>
        <p>
          Around this time I was very into roguelike games, such as Enter the Gungeon and The Binding of Isaac. These games really inspired me to try and see if I could make a game with the core elements of a roguelike, and so, that's exactly what I did. My main objectives going into the project were to add procedurally generating floors, multiple enemies, a leveling system, a shop, and some sort of upgrade tree. This tree ended up coming in the weapon upgrade system, where depending on which weapon you purchase, very different guns will be available in the later floors.
        </p>
      </>
  },
  {  // 2
    title: "Spaceship Arena - IEEE Game Jam 2022",
    startDate: "October 2022",
    date: "January 2023",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/SpaceshipArena_IEEE-GJ-01"),
            linkObj("itch.io Page", "https://svedek.itch.io/ship-game")],
    body:
      <>
        <p>
          Spaceship Arena was an entry for a game jam led by my university’s branch of the IEEE Computer Society. The original jam only lasted a few hours, and was not near enough time for me to get a finished product. I continued to work on Spaceship Arena on and off throughout the semester, slowly learning Godot and adding features.
        </p>
        <p>
          Spaceship Arena was my first foray into the Godot Engine and is a chance I’m glad I took. I had no major complaints with Unity at this point and just wanted to try something new. After getting past the initial hiccups, I ended up loving the engine and made a full swap from Unity to Godot.
        </p>
      </>
  },
  {  // 3
    title: "Contract Reaper - Godot Wild Jam 62",
    date: "October 2023",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/GDWJ-62"),
            linkObj("itch.io Page", "https://svedek.itch.io/contract-reaper")],
    body:
      <>
        <p>
          Contract Reaper is an incomplete 2D platforming action game. It was originally created as an entry for the Godot Wild Jam #62, though I failed to submit the project in time. I did however create a video documenting the development process - linked below.
        </p>
        <MediaContainer>
          <Video src="https://www.youtube-nocookie.com/embed/aKlwMbn-jOw?si=uLLjCPKwqcTbNYYO" />
        </MediaContainer>
        <p>
          I’m very happy with how the video turned out and may try to continue making similar videos in the future. I also have plans to eventually revisit and complete Contract Reaper, though I am unsure of when exactly this will be.
        </p>
      </>
  },
  {  // 4
    title: "Portfolio Website",
    startDate: "August 2023",
    date: "November 2023",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/Svedek.github.io")],
    body:
      <>
        <p>
          This website was created as a central and public area to share my work and ideas.
        </p>
        <p>
          I created this site to familiarize myself with basic web development and to teach myself HTML and CSS. Down the road, I plan to teach myself Javascript by creating more interactive and quality of life improvements to this page.
        </p>
      </>

  },
  {  // 5
    title: "Victory! - Web Adventure",
    date: "December 2023",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/victory_web_adventure"),
            linkObj("Link to web adventure!", "https://svedek.neocities.org/")],
    body:
      <>
        <p>
						Victory is an web-based interactive puzzle adventure. It uses video to provide narrative and context for exploring the site with interactions being handled by Javascript.
					</p>
					<p>
						Victory was created as my final project for the art course Moving Images and Sound. It also doubled as my exploration into more interactive web pages and into Javascript.
					</p>
					<p>
						The currently uploaded version is technically complete, though also a very linear experience. I have plans and recorded video for a side quest of sorts I plan to add once I work through some currently prohibitive animations necessary for the update.
					</p>
      </>
  },
  {  // 6
    title: "Scrapbot - Godot Wild Jam 65",
    date: "January 2024",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/GDWJ-65"),
            linkObj("itch.io Page", "https://svedek.itch.io/scrapbot")],
    body:
      <>
        <p>
          Scrapbot was created as an entry for the Godot Wild Jam #65 with the theme Overload. Although currently in an extremely unfinished state, it was made to be a 2D platformer horror game. Within, you are a small robot tasked with entering an abandoned facility to collect scrap while avoiding and hiding from an aggressive entity patrolling the area.
        </p>
        <p>
          Though what is currently uploaded is quite minimal, I learned a lot about pathfinding and collision in Godot while implementing the main enemy. It’s another project I love the idea of finishing, though I have no immediate plans to do so.
        </p>
      </>
  },
  {  // 7
    title: "Animated 3D Renderer",
    startDate: "December 2023",
    date: "February 2024",
    links: [linkObj("GitHub Page", "https://github.com/Svedek/python_renderer")],
    description: "A modular Python program that renders an animated scene into a GIF file. The scene, meshes, camera, lighting, shading algorithm, and frame rate of the animation can all be customized by the user.",
    body:
      <>
        <p>
          The Animated Renderer is a modular Python project that takes a user-defined runner script as well as paths to STL files to render and output a GIF of the animation. The rendering style, frame rate, meshes to be used, fields to animate, and more are all able to be set in the runner script. There is thorough documentation on the modules and how to create a runner script in the GitHub README.
        </p>
        <p>
          Admittedly, the renderer is quite slow to process the animation, but this slow rendering is not reflected in the final animation. Below are two examples of rendered animations:
        </p>
        <MediaContainer>
          <Image src="assets/projects/animated3DRenderer/ballBounce.gif" />
          <Image src="assets/projects/animated3DRenderer/rotate.gif" />
        </MediaContainer>
        <p>
          The original project, being a static image renderer with no file output, was created as a semester-long project in the course Fundamentals-Computer Graphics. The animation extension was an entirely personal addition to my renderer. Completing the project gave me a new appreciation for rendering 3D spaces and the work required to create a high quality and speedy renderer.
        </p>
      </>
  },
  {  // 8
    title: "COOL Compiler",
    startDate: "January 2024",
    date: "December 2024",
    links: [],
    description: "A bootstrapping compiler, written in COOL and compiling COOL into MIPS assembly language. Built from scanner to code generation using JFlex scanning and Yacc for and parsing.",
    body:
      <>
        <p>
          I created a complete bootstrapping compiler for COOL (Classroom Object-Oriented Language - a subset of Scala) as part of Introduction to Compilers. The code for the project is not made public so as to avoid students of future semesters taking the code, though if interested in talking about the COOL compiler, please reach out to me.
        </p>
        <p>
          The compiler consists of a scanner using JFlex to recognize proper COOL tokens. These tokens are sent to the parser segment which uses Yacc to create a parse tree of the program to be compiled. A semantic analysis segment then takes this tree and both ensures COOL rules are maintained as well as attributes the tree with the necessary information for code generation. Finally, a code generation segment takes the attributed syntax tree and outputs the COOL program compiled into MIPS assembly language.
        </p>
      </>
  },
  // {  // 9
  //   title: "The Seeker",
  //   startDate: "May 2023",
  //   date: IN_DEVELOPMENT,
  //   links: [],
  //   body:
  //     <>
  //       <p>
  //         The Seeker is a currently in-development top down boss fighting game. The player must survive and combat against a single foe with multiple stages. The Seeker is planned to be a prelude to a later game I have broadly planned out.
  //       </p>
  //       <p>
  //         The Seeker has been a longer term project with very on and off development. It’s been a long process and a lot of work to keep the project manageable. Development has slowed down, but overall progress is close to half way done. More information to come.
  //       </p>
  //     </>
  // },
];


//  Start --  Inclusive start index
//  n  --  Number of items to retrieve
//  deltaIndex  --  the number of indexes between returned items
//    (1 is ascending from start, -1 is descending from start)
//  filter  --  Only add items where the filter function returns
//    true when passed the item item
//
//  Returns { {postTitle, postDate, postBody}, ... }
//   any or all entries are permitted to be undefined
const querry = (start, n, deltaIndex, filter = (item) => true) => {
  const ret = [];
  let skipped = 0;
  for (let i = 0; i < n; ++i) {
    const offset = (i + skipped) * deltaIndex;
    const item = table[start + offset];
    if (typeof item !== 'undefined') {
      if (filter(item)) {
        ret[i] = item;
      } else {  // Don't increment i if filter returns false so that n items can still be returned
        --i;
        ++skipped;
      }
    };
  };
  return ret;
};

const querryByTitle = (title) => {
  ret = undefined;
  table.forEach((item) => {if (item.title === title) ret = item});
  return ret;
};

const numItems = table.length;


export { querry, querryByTitle, numItems };