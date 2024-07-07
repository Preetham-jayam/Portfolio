import React from "react";
import Eduphoria from "../assets/Eduphoria.png";
import TechieShop from "../assets/TechieShop.png";
import Movie from '../assets/MovieMazaa.png'
import Ideas from '../assets/InfiniteIdeas.png'
import fsd from "../assets/fsd.png";
import Learnify from '../assets/Learnify.png'
import Footer from "./Footer";
import Background from "./Background";

const ProjectCard = ({
  title,
  description,
  techStack,
  repoLink,
  liveLink,
  image,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white m-4 transform transition duration-500 hover:scale-105 hover:shadow-xl  hover:shadow-gray-500/50">
      <img
        className="w-full h-50 object-cover rounded-t-lg"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <a
          href={repoLink}
          className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          <i className="fab fa-github mr-2"></i>View Repo
        </a>
        <a
          href={liveLink}
          rel="noreferrer"
          target="_blank"
          className="flex items-center bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          <i className="fas fa-arrow-right mr-2"></i>Live Demo
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Background>
      <div className="py-12 mt-8">
        <h2 className="text-white text-4xl sm:text-5xl text-center font-extrabold mt-2 pt-4 pb-4">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              repoLink={project.repoLink}
              liveLink={project.liveLink}
              image={project.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Background>
  );
};

const projects = [
  {
    title: "Eduphoria",
    description:
      "Created a e-learning platform  with secure authentication for students to enroll a course, take quizzes, while providing teachers tools for course creation, content management, and quiz administration. Efficient user role management via admin and email notifications were also implemented.",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    repoLink: "https://github.com/Preetham-jayam/Eduphoria_MERN",
    liveLink: "https://frontend-mern-delta.vercel.app/",
    image: Eduphoria,
  },
  {
    title: "Eduphoria",
    description:
      "Developed the same E-Learning platform with different tech stack using nodejs and ejs engine templates ",
    techStack: ["MongoDB", "Node.js", "EJS"],
    repoLink: "https://github.com/Preetham-jayam/fsd",
    liveLink: "https://eduphoria.onrender.com/",
    image: fsd,
  },
  {
    title: "TechieShop",
    description:
      "Developed a e-commerce platform with essential features like product reviews, ratings. Implemented user-friendly interfaces for browsing via pagination and search, while enabling seamless checkout with PayPal and credit card integration. Admin capabilities include comprehensive product, user, and order management.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    repoLink: "https://github.com/Preetham-jayam/MernApp",
    liveLink: "https://techieshop.onrender.com/",
    image: TechieShop,
  },
  {
    title: "Learnify",
    description:
      "Learnify is Node.js web application using EJS template engine features OAuth 2.0 authentication for secure Google sign-ins. It includes Creator and Student roles, enabling Creators to upload and post videos while Students can view them also supports infinite threaded comments and utilizes AWS S3 and CDN for efficient media storage and delivery.",
    techStack: ["Node.js", "EJS","MongoDB"],
    repoLink: "https://github.com/Preetham-jayam/Learnify",
    liveLink: "https://learnify-ky1h.onrender.com",
    image: Learnify,
  },
  {
    title: "MovieMazaa",
    description:
      "This project is an interactive React application built to fetch and display movie details using the TMDB API. It features basic functionalities including custom hooks for optimized state management, robust search capabilities, and a sleek user interface crafted with Tailwind CSS.",
    techStack: ["React", "Tailwind css"],
    repoLink: "https://github.com/Preetham-jayam/MovieMazaa",
    liveLink: "https://movie-mazaa.netlify.app/",
    image: Movie,
  },
  {
    title: "Infinite Ideas",
    description:
      "This project is an interactive React application designed to explore the integration of React Skeleton Loader with Firebase backend and Google authentication. It serves as a practical demonstration of building dynamic, responsive user interfaces while leveraging Firebase for backend services and integrating secure user authentication via Google.",
    techStack: ["React", "Tailwind css","Firebase"],
    repoLink: "https://github.com/Preetham-jayam/BlogPosts",
    liveLink: "https://infinite-ideas.netlify.app/",
    image: Ideas,
  },
];

export default Projects;
