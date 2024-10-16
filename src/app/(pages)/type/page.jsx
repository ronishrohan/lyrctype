"use client";
import React, { useEffect, useRef, useState } from "react";
import { Roboto_Flex, Syne } from "next/font/google";
import Button from "@/app/components/Button/Button";
import { icons } from "@/util/icons";
import { useAtom } from "jotai";
import { currentTheme as currentThemeAtom } from "@/store/themeStore";
import { motion, useForceUpdate, useMotionValue, useSpring } from "framer-motion";

const syne = Syne({ weight: "variable", subsets: ["latin"] });
const roboto = Roboto_Flex({ weight: "600", subsets: ["latin"] });

const TypePage = () => {
  const [theme, setTheme] = useAtom(currentThemeAtom);
  return (
    <div className="size-full flex px-4 pb-4 gap-4">
      <section className="size-full flex flex-col gap-2">
        <TypingArea></TypingArea>
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
              icon={icons.theme}
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

const TypingArea = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const caretRef = useRef();
  const fieldRef = useRef();
  const caretX = useSpring(0, {damping: 40, stiffness: 400, velocity: 500});
  const caretY = useSpring(0, {damping: 30, stiffness: 400})

  function handleContentUpdate(e) {
    setContent(e.target.value);
    
  }

  useEffect(() => {
    const bounds = caretRef.current.getBoundingClientRect();
    const fieldBounds = fieldRef.current.getBoundingClientRect();
    caretX.set(bounds.left - fieldBounds.left -10 );
    caretY.set(bounds.top - fieldBounds.top - 10);
  }, [content])

  return (
    <div
      ref = {fieldRef}
      onClick={() => contentRef.current.focus()}
      className="relative shrink-0 overflow-hidden flex h-96 w-full bg-background_darker border-2 border-border rounded-md p-2 text-3xl font-mono text-grey_surface"
    >
      <pre className="text-wrap whitespace-pre-wrap inline">
        {content}{" "}
        <div ref={caretRef} className="inline-block absolute align-middle opacity-0 bg-white w-1 h-8 -translate-x-4"></div>
      </pre>
      <motion.div style={{x: caretX, y: caretY}} className=" absolute animate-pulse bg-primary h-8 w-1 -translate-x-4 align-middle "></motion.div>
      <textarea
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
  return (
    <>
      <section className="h-full w-96 shrink-0 min-h-0 flex flex-col">
        <div className="flex flex-col  h-full">
          <div className="flex flex-col shrink  lg:h-96 md:h-64 gap-1">
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
              <div>124</div>
              <div>98%</div>
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
