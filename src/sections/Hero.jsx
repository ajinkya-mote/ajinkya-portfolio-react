import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from "../assets/images/profile.jpg";

const Hero = () => {
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY,[0,500],[0,120]);
  const blobY2 = useTransform(scrollY,[0,500],[0,-120]);

  const roles=["React Developer","Frontend Engineer","UI Enthusiast"];

  const [text,setText]=useState("");
  const [roleIndex,setRoleIndex]=useState(0);
  const [charIndex,setCharIndex]=useState(0);

  useEffect(()=>{
    const t=setTimeout(()=>{
      if(charIndex<roles[roleIndex].length){
        setText(prev=>prev+roles[roleIndex][charIndex]);
        setCharIndex(charIndex+1);
      } else {
        setTimeout(()=>{
          setText("");
          setCharIndex(0);
          setRoleIndex(prev=>(prev+1)%roles.length);
        },1200);
      }
    },80);
    return()=>clearTimeout(t);
  },[charIndex,roleIndex]);

  return(
    <section id="home"
      className="relative min-h-screen flex items-center justify-center px-6">

      <motion.div style={{y:blobY1}}
        className="absolute -top-32 -left-32 w-[350px] h-[350px]
        bg-purple-400 blur-3xl opacity-30 rounded-full"/>

      <motion.div style={{y:blobY2}}
        className="absolute -bottom-32 -right-32 w-[350px] h-[350px]
        bg-blue-400 blur-3xl opacity-30 rounded-full"/>

      <div className="flex flex-col md:flex-row items-center gap-10 z-10">

        <img src={profileImg}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl"/>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-blue-500">Ajinkya Mote</span>
          </h1>

          <p className="mt-4 text-xl text-blue-500 h-8">{text}|</p>

          <p className="mt-4 text-gray-600 max-w-xl">
            React Developer fresher who enjoys building
            real-world web apps using React.js.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
