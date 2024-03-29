AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/ocularbiomechanics.png",
    place: "Laboratory of Ocular Biomechanics",
    time: "(August 2021 - Present)",
    desp: "Advisor: Dr. Ian Sigal",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/pittsci.jpg",
    place: "Alikhani Lab",
    time: "(February 2021 - Present)",
    desp: "Advisor: Dr. Malihe Alikhani",
  },
  {
    title: "Community Assistant",
    cardImage: "assets/images/experience-page/bridge.jpg",
    place: "The Bridge on Forbes Apartments",
    time: "(July 2021 - Present)",
    desp: "",
  },
  {
    title: "Research Assistant",
    cardImage: "assets/images/experience-page/lifelab.png",
    place: "LIFE Lab",
    time: "(August 2020 - August 2021)",
    desp: "<li>Under Dr. Jamie Hanson, I performed quality assurance on the codebase of online experiments using PsychoPy, PsychoJS, and jsPsych.</li><li>Currently, I am implementing Deep Neural Networks using PyTorch, TensorFlow, and Keras to predict “brain age” through MRI data.</li>",
  },
  {
    title: "Computational Biology Research Intern",
    cardImage: "assets/images/experience-page/tecbio.png",
    place: "NSF REU - University of Pittsburgh School of Medicine",
    time: "(May 2021 - July 2021)",
    desp: "<li>Funded by the National Science Foundation, I worked with Dr. Ian Sigal and Ph.D. student Po-Yi Lee at their Ocular Biomechanics Lab to develop a virtual reality platform for visualization and simulation of ocular structures.</li><li>The virtual reality software was implemented using the Unity game engine and included high-level features that focused on understanding the hemodynamic properties of the Lamina Cribrosa Vasculature. The research motives were to better grasp the causes of glaucoma.</li>",
  },
  {
    title: "Resident Assistant",
    cardImage: "assets/images/experience-page/holland.jpg",
    place: "University of Pittsbugh Holland Hall",
    time: "(July 2020 - May 2021)",
    desp: "<li>This role required a comprehensive vetting process and proper training.</li><li>I collaborated with 17 other RAs to build a community that bolsters learning and maturity for about 290 residents.</li><li>This was reflected through programming, administrative tasks, and directly securing the well-being of residents.</li>",
  },
  {
    title: "Educator",
    cardImage: "assets/images/experience-page/numerade.png",
    place: "Numerade",
    time: "(June 2020 - February 2021)",
    desp: "<li>As a freelancer, I made about 300 short videos explaining textbook mathematical problems and how to solve them.</li><li>The subjects ranged from Algebra to Calculus II, covering topics like exponential and logarithmic functions, graphing, conic sections, polar coordinates, applications of integration, and more.</li>",
  },
  {
    title: "Software Engineering Virtual Experience",
    cardImage: "assets/images/experience-page/jpmorgan.jpg",
    place: "JPMorgan & Chase Co.",
    time: "(May 2020 - June 2020)",
    desp: "<li>Learned how to set up my system by downloading necessary repositories and dependencies through Git commands.</li><li>Fixed a client datafeed script through Python to interface stock price data feed.</li><li>Used JPMorgan Chase frameworks to deal with typescript files in the repository that were displaying the web application output incorrectly.</li><li>Displayed the data visually to traders using JPMorgan Chase's Perspective.</li><li>Currently, I am working on contributing to the open source project of Perspective.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Editor/Podcaster",
    cardImage: "assets/images/experience-page/helyx.png",
    description:
      "For the volunteer group, The Helyx Initiative, I serve as an editor for blogs on topics of Computational Biology and supplementally speak for the organization's podcast which is hosted on Spotify.",
  },
  {
    title: "Social and Outreach Chair",
    cardImage: "assets/images/experience-page/pittsasa.jpg",
    description:
      "I represent the South Asian Student Association by planning large-scale events that strengthen ties within and among other organizations on campus.",
  },
  {
    title: "Pitt Computer Science Club Member",
    cardImage: "assets/images/experience-page/pittcsc.png",
    description:
      "I am part of a community of computer science enthusiasts who work to better each other.",
  },
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/code4philly.png",
    description:
      "I contributed to the civic coding group, Code for Philly, by continuing the front-end development of the PHLASK Project which is focused on locating crucial resources in Philadelphia.",
  },
  {
    title: "Human Voicebank",
    cardImage: "assets/images/experience-page/vocalid.png",
    description:
      "I contributed my voice to the 'Human Voicebank' which combines with the vocalizations of those living with speech impairments, allowing them to be heard. My recordings advanced the science of expressive voices.",
  },
  {
    title: "Vice Chair of Academic Affairs",
    cardImage: "assets/images/experience-page/sgb.png",
    description:
      "I represented the School of Computing and Information in Student Government by establishing a robust foundation for an extensive system of resources.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Metor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  }
  

];


const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

