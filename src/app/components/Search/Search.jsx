"use client";
import { icons } from "@/util/icons";
import { Syne } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSearchToolbar } from "@/store/SearchToolbar/Search.provider";
import Genius from "@/util/genius/genius";
import Image from "next/image";


const syne = Syne({ subsets: ["latin"], weight: "variable" });

const SearchToolbar = () => {
  const { enabled, setEnabled } = useSearchToolbar();
  const [songs, setSongs] = useState();

  function handleDisable() {
    setEnabled(false);
  }

  

  useEffect(() => {
    function handleCloseSearch(e) {
      if (e.key == "Escape") {
        e.preventDefault();
        setEnabled(false);
      }
    }

    document.addEventListener("keydown", handleCloseSearch);
    return () => document.removeEventListener("keydown", handleCloseSearch);
  });

  return (
    <AnimatePresence>
      {enabled && (
        <div className="z-50 fixed size-full flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleDisable}
            className="z-30 absolute size-full bg-black/15 pointer-events-auto"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: "tween", ease: "circInOut" }}
            className="pointer-events-auto z-50 bg-background_darker h-2/3 overflow-hidden relative shadow-black shadow-2xl w-1/2 rounded-md border-2 border-border flex flex-col  "
          >
            <SearchBar setSongs={setSongs}></SearchBar>
            <div className="size-full p-2 flex flex-col gap-2 overflow-y-auto">
              {songs && songs.map((song) => <SearchResult key={song.result.url} song={song} />)}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const SearchResult = ({song}) => {
  const { setEnabled } = useSearchToolbar();
  const router = useRouter();
  function handleRedirect() {
    
    router.push(`/type?id=${song.result.id}`);

    setEnabled(false);
  }
  return (
    <button
      onClick={handleRedirect}
      className="w-full h-24 shrink-0 rounded-md border-2 hover:bg-primary_tint hover:text-primary group border-grey_inactive hover:border-primary overflow-hidden bg-background_darker flex items-center"
    >
      <div className="h-24 aspect-square">
        {/* <img
          src={song.result.header_image_thumbnail_url}
          alt=""
          className="w-full h-full shrink-0 object-cover"
        /> */}
        <Image src={song.result.header_image_thumbnail_url} width={300} height={300}></Image>
      </div>
      <div
        className={`flex size-full  font-medium flex-col items-start leading-5 p-2 ${syne.className}`}
      >
        <div className="text-lg">{song.result.title}</div>
        <div className="text-md text-grey_surface group-hover:text-primary">
          {song.result.primary_artist.name}
        </div>
      </div>
      <div className="size-11 ml-auto fill-primary mx-4 translate-y-1 group-hover:opacity-100 opacity-0 transition-opacity">
        {icons.play}
      </div>
    </button>
  );
};

const SearchBar = ({setSongs}) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  });

  async function handleSearch(e){
    if(e){
      if(e.keyCode == 13){
        const song = searchRef.current.value;
        const data = await Genius.getSongs(song);
        console.log(data)
        setSongs(data)
      }
    }
    
  }

  return (
    <div className="relative w-full h-fit flex items-center border-b-2 border-border">
      <input
        ref={searchRef}
        onKeyDown={handleSearch}
        type="text"
        placeholder="SEARCH FOR A SONG"
        className="p-4 peer placeholder:text-grey_surface placeholder:font-syne placeholder:font-bold outline-none bg-background_darker w-full pl-12"
      />
      <div className="absolute peer-focus:fill-primary transition size-6 ml-3 left-0 fill-grey_surface">
        {icons.search}
      </div>
      <div className="font-syne  font-bold right-0 p-4 bg- text-grey_surface">
        /ENTER
      </div>
    </div>
  );
};

export default SearchToolbar;
