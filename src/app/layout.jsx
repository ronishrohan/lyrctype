
import "./index.css";

import "@fontsource/syne";
import "@fontsource/xanh-mono";


import RootProviders from "@/providers/RootProviders";
import ThemedBody from "./components/Root/ThemedBody";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RootProviders>
        <ThemedBody>{children}</ThemedBody>
      </RootProviders>
    </html>
  );
}
