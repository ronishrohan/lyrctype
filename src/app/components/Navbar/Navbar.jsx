import React from "react";
import { Syne } from "next/font/google";
import Button from "../Button/Button";

const syne = Syne({ subsets: ["latin"], weight: "800" });

const Navbar = () => {
  return (
    <header className="h-[80px] sticky p-4  flex bg-background items-center">
      <div className={`${syne.className} text-4xl text-primary shrink-0`}>
        LYRC
      </div>
      <div className="flex gap-2 ml-auto h-full w-96">
        <div className="box-border h-full w-full ">
          <input
            type="text"
            className="box-border  size-full focus:border-primary bg-background_darker outline-none border-2 border-border rounded-md p-4 text0sm"
          />
        </div>
        <Button title="Your profile" className="aspect-square h-full shrink-0"></Button>
      </div>
    </header>
  );
};

export default Navbar;
