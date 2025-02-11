import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import Background from './Background';
const Home = () => {
  const name = 'Preetham Jayam';
  const ref = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prev) => prev + name[ref.current - 1]);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
		<div className='w-screen h-screen relative flex justify-center items-center text-white '>
			<div className='p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl text-center'>
			<h1 className='text-5xl sm:text-6xl font-extrabold mt-2'>
				Hi, I'm <span className='text-blue-400 font-extrabold'>{text}</span>
			</h1>
			<p className='mt-4 text-lg sm:text-xl'>
				I'm an undergraduate student in Computer Science Engineering at the Indian Institute of Information Technology, Sricity. 🎓<br/>
				I'm passionate about full-stack development and love creating innovative applications. 🌟💻
			</p>
			</div>
		</div>
		<Footer />
    </Background>
  );
};

export default Home;
