"use client"
import { icons } from "@/util/icons";
import { Syne } from "next/font/google";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const syne = Syne({ subsets: ["latin"], weight: "variable" });

const Search = () => {
  return (
    <AnimatePresence>
      <div className="z-50 fixed size-full flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="z-40 absolute size-full bg-black/15"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, type: "tween", ease: "circInOut" }}
          className="pointer-events-auto bg-background_darker h-2/3 overflow-hidden relative shadow-black shadow-2xl w-1/2 rounded-md border-2 border-border flex flex-col  "
        >
          <SearchBar></SearchBar>
          <div className="size-full p-2 flex flex-col gap-2">
            <SearchResult></SearchResult>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const SearchResult = () => {
    const router = useRouter();
    function handleRedirect(){
        router.push("/type")
    }
  return (
    <button onClick={handleRedirect} className="w-full h-24 rounded-md border-2 hover:bg-primary_tint hover:text-primary group border-grey_inactive hover:border-primary overflow-hidden bg-background_darker flex items-center">
      <div className="h-full aspect-square">
        <img
          src="https://media.pitchfork.com/photos/627bb38d93f71d60359384f1/1:1/w_320,c_limit/Danger-Mouse-Black-Thought-Cheat-Codes-2022.jpg"
          alt=""
          className="w-full h-full shrink-0 object-cover"
        />
      </div>
      <div
        className={`flex size-full  font-medium flex-col items-start leading-5 p-2 ${syne.className}`}
      >
        <div className="text-lg">Identical Deaths</div>
        <div className="text-md text-grey_surface group-hover:text-primary">
          Danger Mouse, Black Thought
        </div>
      </div>
      <div className="size-11 ml-auto fill-primary mx-4 translate-y-1 group-hover:opacity-100 opacity-0 transition-opacity">
        {icons.play}
      </div>
    </button>
  );
};

const SearchBar = () => {
  return (
    <div className="relative w-full h-fit flex items-center border-b-2 border-border">
      <input
        type="text"
        placeholder="SEARCH FOR A SONG"
        className="p-4 placeholder:text-grey_surface placeholder:font-syne placeholder:font-bold outline-none bg-background_darker w-full pl-12"
      />
      <div className="absolute size-6 ml-3 left-0 fill-grey_surface">
        {icons.search}
      </div>
      <div className="font-syne font-bold right-0 p-4 bg- text-grey_surface">
        /ENTER
      </div>
    </div>
  );
};

export default Search;
