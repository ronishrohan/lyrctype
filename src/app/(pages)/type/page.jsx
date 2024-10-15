import React from "react";
import { Syne } from "next/font/google";
import Button from "@/app/components/Button/Button";

const syne = Syne({ weight: "variable", subsets: ["latin"] });

const page = () => {
  return (
    <div className="size-full flex px-4 pb-4 gap-4">
      <section className="size-full flex flex-col gap-2">
        <TypingArea></TypingArea>
        <section
          style={{ fontVariationSettings: '"wdth" 150, "grad" 120, "opsz" 95' }}
          className={`flex gap-4 font-roboto font-semibold text-grey_surface hover:*:text-primary h-fit shrink-0`}
        >
          <TogglabbleButton>15 SECONDS</TogglabbleButton>
          <TogglabbleButton>PUNCTUATION</TogglabbleButton>
          <TogglabbleButton>CASE</TogglabbleButton>
          <TogglabbleButton>SHOW</TogglabbleButton>
        </section>
        <section className="flex gap-2 size-full">
          <section className="h-32 flex gap-2 w-full *:h-full *:w-full hover:*:w-[150%] *:transition-all *:ease-circOut *:duration-500">
            <Button className=""></Button>
            <Button className=""></Button>
            <Button className=""></Button>
            <Button className=""></Button>
          </section>
          <Button className="h-full aspect-square shrink-0" ></Button>
        </section>
      </section>
      <SidebarContainer />
    </div>
  );
};

const TogglabbleButton = ({ children }) => {
  return <button>{children.toString()}</button>;
};

const TypingArea = () => {
  return (
    <section className="relative shrink-0 overflow-hidden flex justify-center h-96 w-full bg-background_darker border-2 border-border rounded-md p-2 text-3xl font-mono text-grey_surface">
      i was proven effective by clinical tests for livin many lives dyin
      identical deaths i thought why how could this have ever been if im blessed
      then i had a talk with god that was interviewesque he said riq as near as
      the west and far as the east theres a warrant for your arrest by the karma
      police the dharma was deep i thought it was too dark to defeat but made it
      here to tell the story by the chalk of my teeth im a survivor a thriver a
      husband and a father i rise with every morning and star in another saga i
      was proven effective by clinical tests for livin many lives dyin identical
      deaths i thought why how could this have ever been if im blessed then i
      had a talk with god that was interviewesque he said riq as near as the
      west and far as the east theres a warrant for your arrest by the karma
      police the dharma was deep i thought it was too dark to defeat but made it
      here to tell the story by the chalk of my teeth im a survivor a thriver a
      husband and a father i rise with every morning and star in another saga
      <div className="absolute -bottom-10 h-36  w-[98%] rounded-t-full bg-background_darker blur-md"></div>
    </section>
  );
};

const SidebarContainer = () => {
  return (
    <>
      <section className="h-full w-96 shrink-0 min-h-0 flex flex-col">
        <div className="flex flex-col gap-2 h-full">
          <div className="flex flex-col shrink  h-96 gap-1">
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
            className={`mt-2 w-full h-fit flex flex-col gap-2 text-2xl leading-4 shrink-0 ${syne.className}`}
          >
            <div className="font-semibold">Identical Deaths</div>
            <div className="font-semibold text-xl text-grey_surface">
              Danger Mouse, Black Thought
            </div>
          </section>
          <section className="w-full h-fit">
            <div
              style={{ fontVariationSettings: '"wdth" 25' }}
              className="text-9xl text-primary font-bold font-roboto flex justify-between"
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

export default page;
