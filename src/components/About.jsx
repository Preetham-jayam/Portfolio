import React from 'react';
import '../App.css';
import Footer from './Footer';
import Background from './Background';

const skills = [
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/c/c-original.svg'
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/cplusplus/cplusplus-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/react/react-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/mysql/mysql-original.svg'
  },
  {
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/postman/postman-original.svg'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/docker/docker-original.svg'
  },
  {
    name: 'Redux',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/redux/redux-original.svg'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/npm/devicon/icons/tailwindcss/tailwindcss-plain.svg'
  },
  
];


const SkillCard = ({ skill }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full p-[1px] rounded-[20px] transition-transform duration-300 hover:transform hover:scale-105'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{
          background: 'linear-gradient(145deg, rgba(68,68,112,0.8), rgba(40,40,90,0.8))',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)'
        }}>
        <img
          src={skill.icon}
          alt='skill_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {skill.name}
        </h3>
      </div>
    </div>
  </div>
);




const About = () => {
  return (
    <Background>
   
    <div className='h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl text-center font-extrabold mt-2 pt-4 pb-4'>About Me</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
            👋 Hi, I'm Preetham! I'm currently pursuing a degree in Computer Science Engineering at the Indian Institute of Information Technology, Sricity. 
            <br/>
            <br/>
            💻 I have a strong foundation in programming languages like C, C++, and JavaScript, and I'm proficient in web technologies including HTML, CSS, JavaScript, Node.js, React.js, MongoDB, and MySQL.
            <br/>
            <br/>
            🚀 I have hands-on experience with MERN stack projects, showcasing my ability to build full-stack web applications.
            <br/>
            <br/>
            🌍 In my free time, I love learning new things and traveling with friends, which keeps me inspired and motivated.
          </p>
          <a
            href='https://drive.google.com/file/d/1DlRCWcjfLOWdY1OpfvAnDsHplzCPhDLQ/view?usp=sharing'
            target='_blank'
            className={`transition ease-in-out duration-300 p-3 rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer`} rel="noreferrer"
          >
            My Resume →
          </a>
          
        </div>
        
      </div>
      
    </div>
    <h2 className='text-white text-4xl sm:text-5xl text-center font-extrabold mt-2'>Skills</h2>
    <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      <Footer/>
    </Background>
  )
}

export default About;
