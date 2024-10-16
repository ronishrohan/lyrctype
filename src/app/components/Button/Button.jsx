"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, size, name, title, icon, ...others }) => {
  const [ripples, setRipples] = React.useState([]);
  const buttonRef = useRef();
  const [mouse, setMouse] = useState([0,0]);
  const [held, setHeld] = useState(false);
  useLayoutEffect(() => {
    const handleMouseMove = (e) => {
      const buttonBounds = buttonRef.current.getBoundingClientRect();
      
      setMouse([e.clientX - buttonBounds.left - buttonBounds.width/2, e.clientY - buttonBounds.top - buttonBounds.height/2]);
    }
    if(window){
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  function handleOnCLick() {
    
    onClick && onClick();
    
 
    setRipples((ripples) => [...ripples, 1]);
  }
  return (
    <div {...others} title={title}>
      <button
        ref={buttonRef}
        onClick={handleOnCLick}
        
        className="relative cursor-default overflow-hidden size-full group rounded-md border-2 border-border hover:border-primary bg-background hover:bg-primary_tint flex items-center justify-center"
      >
        <div
          className={`${
            size == "small" ? "h-1/2" : "h-1/3"
          } aspect-square z-10 fill-grey_surface group-hover:fill-primary `}
        >
          {icon}
        </div>
        <div
          style={{ fontVariationSettings: '"wdth" 40, "grad" 120, "opsz" 95' }}
          className="font-semibold absolute z-10 group-hover:text-primary bottom-0 right-0 font-roboto m-2 text-xl leading-4 text-grey_surface"
        >
          {name}
        </div>
        {ripples.map((state, index) => {
          if(state == 1){
          setInterval(() => {
            ripples[index] = 0;
          }, 500)
          return (
            <motion.div
              key={"ripple" + index}
              style={{x: mouse[0], y: mouse[1]}}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="rounded-full z-0 absolute size-full aspect-square blur-2xl bg-primary "
            ></motion.div>
          );
          }
        })}
      </button>
    </div>
  );
};

export default Button;
