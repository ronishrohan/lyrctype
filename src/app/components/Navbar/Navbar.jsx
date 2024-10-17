"use client";
import React, { useEffect, useState } from "react";
import { Syne } from "next/font/google";
import Button from "../Button/Button";
import { icons } from "@/util/icons";
import Link from "next/link";
import { useSearchToolbar } from "@/store/SearchToolbar/Search.provider";

const syne = Syne({ subsets: ["latin"], weight: "variable" });

const Navbar = () => {
  const {setEnabled} = useSearchToolbar();
  useEffect(() => {
    function handleOpenSearch(e){
      
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setEnabled(true);
      }
      else{
        return;
      }
    }
    document.addEventListener("keydown", handleOpenSearch);
    return () => document.removeEventListener("keydown", handleOpenSearch);
  })
  return (
    <header className="h-[80px] sticky p-4  flex bg-background items-center">
      <Link
      href={"/"}
        className={`${syne.className} text-4xl font-black text-primary shrink-0`}
      >
        LYRC
      </Link>
      <div className="flex gap-2 ml-auto h-full w-[50vh] min-w-96">
        <SearchBar></SearchBar>
        <Button
          title="Your profile"
          className="aspect-square h-full shrink-0"
          size="small"
          icon={icons.profile}
        ></Button>
      </div>
    </header>
  );
};

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div
        className={`relative flex  items-center justify-center box-border h-full w-full ${syne.className}`}
      >
        
        {!isFocused && (
          <div className="m-4 right-0 absolute font-bold text-grey_inactive">
          /CTRL+K
        </div>
        )}
        
        <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
          type="text"
          placeholder="SEARCH"
          className="box-border peer pl-12 placeholder:text-grey_inactive  font-roboto placeholder:font-bold size-full focus:border-primary bg-background_darker outline-none border-2 border-border rounded-md p-4 text0sm"
        />
        <div className="left-0 m-4  peer-focus:fill-primary  size-6 fill-grey_inactive absolute">
          {icons.search}
        </div>
      </div>
    </>
  );
};

export default Navbar;
