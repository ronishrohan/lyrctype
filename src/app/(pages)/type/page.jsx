"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Roboto_Flex, Syne } from "next/font/google";
import Button from "@/app/components/Button/Button";
import { icons } from "@/util/icons";
import { useAtom, useAtomValue } from "jotai";
import { currentTheme as currentThemeAtom } from "@/store/themeStore";
import {
  AnimatePresence,
  motion,
  useSpring,
} from "framer-motion";

import parse from "html-react-parser"
import { accuracyAtom, wpmAtom } from "@/store/typeStore";

const syne = Syne({ weight: "variable", subsets: ["latin"] });
const roboto = Roboto_Flex({ weight: "600", subsets: ["latin"] });

const TypePage = () => {
  const [theme, setTheme] = useAtom(currentThemeAtom);
  const textFieldRef = useRef();

  const [isFocused, setIsFocused] = useState(false);


  return (
    <div className="size-full flex px-4 pb-4 gap-4">
      <section className="size-full flex flex-col gap-2">
        <div className="size-full flex items-center justify-center relative">
          <AnimatePresence>
            <motion.div
              style={{ fontVariationSettings: '"wdth" 25' }}
              initial={{ backdropFilter: "blur(0px)", opacity: 1 }}
              animate={{
                backdropFilter: isFocused ? "blur(0px)" : "blur(10px)",
                opacity: isFocused ? 0 : 1,
              }}
              className="pointer-events-none absolute z-30 size-full backdrop-blur-md rounded-md font-syne flex items-center justify-center text-grey_surface font-black text-2xl border-2 border-border"
            >
              CLICK HERE TO FOCUS
            </motion.div>
          </AnimatePresence>

          <TypingArea
            textField={textFieldRef}
            handleFocus={setIsFocused}
          ></TypingArea>
        </div>
        <section
          style={{ fontVariationSettings: '"wdth" 250, "grad" 120, "opsz" 95' }}
          className={`flex gap-4 font-roboto font-semibold text-grey_surface hover:*:text-primary h-fit shrink-0`}
        >
          <TogglabbleButton>15 SECONDS</TogglabbleButton>
          <TogglabbleButton>PUNCTUATION</TogglabbleButton>
          <TogglabbleButton>CASE</TogglabbleButton>
          <TogglabbleButton>SHOW</TogglabbleButton>
          <button className="overflow-hidden ml-auto h-8 items-center border-2 border-primary_tint gap-6 rounded-md flex p-1 px-2 hover:border-primary fill-grey_surface hover:fill-primary hover:bg-primary_tint">
            <div className="md:hidden lg:block">RANDOM</div>
            <div className="size-4">{icons.random}</div>
          </button>
        </section>
        <section className="flex gap-2 size-full relative">
          <section className="max-h-32 flex gap-2 w-full  *:h-full *:w-full hover:*:w-[120%] *:transition-all *:ease-circOut *:duration-500">
            <Button
              onClick={() => {}}
              name={"LEADERBOARD"}
              icon={icons.leaderboard}
            ></Button>
            <Button name={"SETTINGS"} icon={icons.settings}></Button>
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              name={"THEME"}
              icon={theme == "dark" ? icons.theme_light : icons.theme_dark}
            ></Button>
            <Button name={"PROFILE"} icon={icons.profile}></Button>
            <Button
              onClick={() =>
                window.open("https://github.com/ronishrohan/lyrctype", "_blank")
              }
              name={"GITHUB"}
              className="md:block lg:hidden"
              icon={icons.github}
            ></Button>
          </section>
          {/* <div className="size-full" ></div> */}
          <Button
            onClick={() =>
              window.open("https://github.com/ronishrohan/lyrctype", "_blank")
            }
            className="relative w-1/4 shrink-0 h-full md:hidden lg:block"
            name={"GITHUB"}
            icon={icons.github}
          ></Button>
        </section>
      </section>
      <SidebarContainer />
    </div>
  );
};

const TogglabbleButton = ({ children }) => {
  return <motion.button>{children.toString()}</motion.button>;
};

const TypingArea = ({ textFieldRef, handleFocus }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const caretRef = useRef();
  const fieldRef = useRef();
  const caretX = useSpring(0, { damping: 40, stiffness: 400 });
  const caretY = useSpring(0, { damping: 30, stiffness: 400 });

  const lyrics =
    "i was proven effective by clinical tests for livin many lives dyin identical deaths i thought why how could this have ever been if im blessed then i had a talk with god that was interviewesque he said riq as near as the west and far as the east theres a warrant for your arrest by the karma police the dharma was deep i thought it was too dark to defeat but made it here to tell the story by the chalk of my teeth im a survivor a thriver a husband and a father i rise with every morning and star in another saga ";

  const [lyricsEntered, setLyricsEntered] = useState([[]]);
  const [finalLyrics, setFinalLyrics] = useState("");
  const [wpm, setWpm] = useAtom(wpmAtom);
  const [timer, setTimer] = useState(1);
  const [start, setStart] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimer(prev => prev + 100);
      }, 100);
    }

    
    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    if(content.length > 0){
      setStart(true)
    }
    
    
  }, [content])
  useEffect(() => {

    if(wpm < 0){
      return
    }
    
    if(timer/1000 > 5){
      setStart(false)
      
    }
    else{
      setWpm(Math.round((content.length/4 - mistakes/10)*60/(timer/1000)))
    }
    
  }, [timer])
  function handleContentUpdate(e) {
    const tempContent = e.target.value;
    
    
    if(lyrics[e.target.value.length-1] == " "){
      // console.log(lyrics[e.target.value.length-1],e.target.value[e.target.value.length-1])
      if(lyrics[e.target.value.length-1] != e.target.value[e.target.value.length-1]){
        contentRef.current.value = tempContent.slice(0, -1);
        return
      }
    }
    // console.log(lyrics[tempContent.length])

    setContent(e.target.value);
   
    const temp = [[]]
    tempContent.split("").forEach((letter, index) => {
      if(lyrics[index] == letter){
        temp[index] = [letter, true]
      }
      else{
        temp[index] = [lyrics[index], false]
      }
    })
    

    let final = "";
    let start=-1;
    
    if(lyrics[finalLyrics.length] == " "){
      // console.log(true)
    }

    if(e.target.value.length > 0){
      temp.forEach((letter, index) => {
        // console.log(lyrics[final.length])
        

        if (letter[1]) {
          if(start != -1){
            
            
            final+="</span>"
            start = -1;
          }
  
          final += letter[0];
        }
        else{
          setMistakes(prev => prev + 1)
          if(start == -1){
            final += '<span className="text-warning z-10 relative">'
            final += letter[0];
          }
          else{
            final += letter[0];
          }
          start = index;
          
        }

        
      })
    }

    
    
    setFinalLyrics(final);
    // setLyricsEntered(temp);
    
  }

 

  useLayoutEffect(() => {
    
    
    contentRef.current.focus();
    textFieldRef = contentRef;
    
    const bounds = caretRef.current.getBoundingClientRect();
    const fieldBounds = fieldRef.current.getBoundingClientRect();
    caretX.set(bounds.left - fieldBounds.left + 5);
    caretY.set(bounds.top - fieldBounds.top - 10);
  }, [content]);

  // useEffect(() => {
  //   console.log(lyricsEntered)
  // }, [lyricsEntered])

  return (
    <div
      ref={fieldRef}
      onClick={() => contentRef.current.focus()}
      className="relative shrink-0 cursor-text overflow-hidden flex min-h-96 h-[50vh] w-full bg-background_darker border-2 border-border rounded-md p-2 text-3xl font-mono text-grey_surface"
    >
      <pre className="text-wrap whitespace-pre-wrap inline text-primary z-20">
        {parse(finalLyrics)}
        <div
          ref={caretRef}
          className="inline-block absolute align-middle opacity-0 bg-white w-1 h-8 -translate-x-4"
        ></div>
      </pre>
      <div className="absolute z-10 select-none">{lyrics}</div>
      <motion.div
        style={{ x: caretX, y: caretY }}
        className=" absolute animate-pulse bg-primary h-8 w-1 -translate-x-4 align-middle shadow-green-400 shadow-md z-20"
      ></motion.div>
      <textarea
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        onChange={handleContentUpdate}
        name="content"
        ref={contentRef}
        id=""
        className="opacity-0 fixed pointer-events-none"
      ></textarea>
      {/* <div className="absolute -bottom-10 h-36  w-[98%] rounded-t-full bg-background_darker blur-md"></div> */}
    </div>
  );
};

const SidebarContainer = () => {

  const wpm = useAtomValue(wpmAtom);
  const accuracy = useAtomValue(accuracyAtom);

  return (
    <>
      <section className="h-full w-[50vh] min-w-96 shrink-0 min-h-0 flex flex-col">
        <div className="flex flex-col  h-full">
          <div className="flex flex-col shrink  lg:min-h-96 lg:h-[50vh] md:h-64 gap-1">
            <h1
              className={`${syne.className} text-primary font-semibold shrink-0`}
            >
              NOW PLAYING
            </h1>
            <div className="rounded-md overflow-hidden h-full flex-grow flex items-center justify-center relative">
              <img
                className="absolute w-full aspect-square"
                src="https://media.pitchfork.com/photos/627bb38d93f71d60359384f1/1:1/w_320,c_limit/Danger-Mouse-Black-Thought-Cheat-Codes-2022.jpg"
                alt=""
              />
            </div>
          </div>
          <section
            className={`mt-4 w-full h-fit flex flex-col gap-2 text-2xl leading-4 shrink ${syne.className}`}
          >
            <div className="font-semibold">Identical Deaths</div>
            <div className="font-semibold text-xl text-grey_surface">
              Danger Mouse, Black Thought
            </div>
          </section>
          <section className="w-full h-fit shrink">
            <div
              style={{
                fontVariationSettings: '"wdth" 40, "grad" 120, "opsz" 250',
              }}
              className="text-[16vh] leading-[16vh] text-primary font-roboto font-bold flex justify-between"
            >
              <div>{wpm}</div>
              <div>{accuracy}%</div>
            </div>
          </section>
          <button
            className={`relative overflow-hidden flex justify-between  mt-auto shrink-0 w-full rounded-md border-2 border-warning p-4 text-warning hover:bg-warning/15 items-center text-xl font-bold ${syne.className}`}
          >
            <div>RESET</div>
            <div>/TAB+ENTER</div>
          </button>
        </div>
      </section>
    </>
  );
};

export default TypePage;
