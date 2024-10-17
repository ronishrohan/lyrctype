"use client"
import Button from "@/app/components/Button/Button";
import { icons } from "@/util/icons";
import React from "react";
import {useRouter} from "next/navigation";
import { useSearchToolbar } from "@/store/SearchToolbar/Search.provider";

const HomePage = () => {
  const router = useRouter();
  const {setEnabled} = useSearchToolbar();
  function handleOpenToolbar(){
    setEnabled(true);
  }
  return (
    <section className="size-full flex flex-col px-4 pb-4 text-primary">
      <div className="font-syne font-bold text-9xl inline">LYRCTYPE</div>
      <div
        style={{ fontVariationSettings: '"wdth" 25' }}
        className="font-roboto font-semibold lg:text-8xl md:text-6xl inline"
      >
        A website to improve your typing skills while listening to music. <br />
        yes. it's useless.
      </div>
      <Button onClick={handleOpenToolbar} className="size-fit mt-auto">
        <div className="size-full flex items-center justify-between p-4 text-primary fill-primary">
          <div className="font-bold font-syne text-9xl z-20">GET STARTED</div>
          <div className="size-32 z-20">{icons.arrow}</div>
          <div className="absolute size-96 bg-primary opacity-25 blur-3xl" ></div>
        </div>
      </Button>
    </section>
  );
};

export default HomePage;
