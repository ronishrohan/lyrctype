import React, { Suspense } from "react";
import ServerTypePage from "./serverPage";

const RootTypePage = ({  searchParams,children }) => {
  
  return (
    <Suspense
      key={searchParams.id}
      fallback={
        <div className="size-full flex items-center justify-center font-roboto font-bold text-7xl text-primary">
          LOADING
        </div>
      }
    >
      <ServerTypePage id={searchParams.id}>{children}</ServerTypePage>
    </Suspense>
  );
};

export default RootTypePage;
