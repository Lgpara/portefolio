import Section from "../../props/sections/Sections"
import Home from "../../components/Home/Home";
import Skills from "../../components/Skills/Skills"
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";


export default function Main() {
  const sections = [
    { 
      id: "home", 
      name: "homeSection",  
      content: <Home /> },
    { 
      id: "skills",
      name: "skillsSection",
      title: "SKILLS", 
      content: <Skills /> },
    {
      id: "projects",
      name: "projectsSection",
      title: "PROJECTS",
      content: <Projects />,
    },
    {
      id: "contact",
      name: "contactSection",
      title: "CONTACT",
      content: <Contact />,
    },
  ];
  return (
    <main>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          id={section.id}
          name={section.name}
          content={section.content}
        />
      ))}
    </main>
  );
}
