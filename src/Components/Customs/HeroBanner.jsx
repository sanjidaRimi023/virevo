import React from "react";
import { Parallax } from "react-parallax";
import { useSpring, animated } from "@react-spring/web";
import bannerImg from "../../assets/code.jpg";

const HeroBanner = () => {
  const spring = useSpring({
    from: { y: 0 },
    to: { y: 0 }, 
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <Parallax
      blur={4}
      bgImage={bannerImg}
      bgImageAlt="banner"
      strength={400}
    >
      <animated.header
        className="h-screen flex text-white flex-col justify-center items-center text-center  bg-white/10"
        // style={spring} 
      >
        <h1 className="text-5xl md:text-6xl font-bold">Your Vision, Our <span className="text-yellow-400"> Code</span></h1>
        <p className="text-lg font-semibold mt-4 w-1/2">
          Professional, responsive websites built to scale with your business.
          We deliver CMS, WordPress, and Full Stack solutions that impress and
          perform
        </p>
        <button className="mt-6 bg-yellow-500 px-6 py-3 text-white font-semibold hover:bg-yellow-600 transition">
          Get a Quote
        </button>
      </animated.header>
    </Parallax>
  );
};

export default HeroBanner;
