import { Provider } from "jotai";
import React from "react";
import { SearchToolbarProvider } from "@/store/SearchToolbar/Search.provider";

const RootProviders = ({ children }) => {
  return (
    <Provider>
      <SearchToolbarProvider>{children}</SearchToolbarProvider>
    </Provider>
  );
};

export default RootProviders;
