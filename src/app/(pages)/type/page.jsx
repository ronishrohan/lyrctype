import React from 'react'
import { Syne } from 'next/font/google'

const syne = Syne({weight: "variable", subsets: ["latin"]})

const page = () => {
  return (
    <div className="size-full flex px-4 pb-4">
        <div className="h-full w-full"></div>
        <section className="h-full w-96 shrink-0 min-h-0 flex flex-col" >
            <div className="flex flex-col gap-2 h-full">
                <h1 className={`${syne.className} text-primary font-semibold shrink-0`}>NOW PLAYING</h1>
                <div className="rounded-md overflow-hidden h-full max-h-96 flex-grow flex items-center justify-center relative" >
                    <img className="absolute w-full aspect-square" src="https://media.pitchfork.com/photos/627bb38d93f71d60359384f1/1:1/w_320,c_limit/Danger-Mouse-Black-Thought-Cheat-Codes-2022.jpg" alt="" />
                </div>
                <section className={`mt-2 w-full h-fit flex flex-col gap-2 text-2xl leading-4 shrink-0 ${syne.className}`}>
                    <div className="font-semibold">Identical Deaths</div>
                    <div className="font-semibold text-xl text-grey_surface">Danger Mouse, Black Thought</div>
                </section>
            </div>
            <div className="w-full h-96 bg-red-600"></div>
        </section>
    </div>
  )
}

export default page