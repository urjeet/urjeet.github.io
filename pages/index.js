import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "Urjeet Deshmukh" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 className="font-cairo font-semibold" variants={text_reveal}>
        {text.content}
      </motion.h1>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p variants={text_reveal_fade}>
            print("Hello, World!") My name is Urjeet Deshmukh and I am currently a sophomore studying Computer Science at the University of Pittsburgh. As a budding, yet ambitious software developer, I am most passionate about all aspects of data science, software engineering and machine learning. However, I would also enjoy exploring other areas of the field and am always ready to solve challenging problems. I plan to supplement my academics with a minor in Economics. Apart from my concentrations, my interests also lie in the subjects of psychology, cognition, and neuroscience
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
