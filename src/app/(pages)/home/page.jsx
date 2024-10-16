"use client"
import Button from "@/app/components/Button/Button";
import { icons } from "@/util/icons";
import React from "react";
import {useRouter} from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  function handleRedirect(){
    router.push("/type")
  }
  return (
    <section className="size-full flex flex-col px-4 pb-4 text-primary">
      <div className="font-syne font-bold text-9xl inline">LYRCTYPE</div>
      <div
        style={{ fontVariationSettings: '"wdth" 25' }}
        className="font-roboto font-semibold lg:text-8xl md:text-4xl inline"
      >
        A website to improve your typing skills while listening to music. <br />
        it's useless.
      </div>
      <Button onClick={handleRedirect} className="size-fit mt-4 mt-auto">
        <div className="size-full flex items-center justify-between p-4 text-primary fill-primary group-hover:text-green-100 group-hover:fill-green-100">
          <div className="font-bold font-syne text-9xl z-20">GET STARTED</div>
          <div className="size-32 z-20">{icons.arrow}</div>
          <div className="absolute size-96 bg-primary opacity-25 blur-3xl" ></div>
        </div>
      </Button>
    </section>
  );
};

export default HomePage;
