import "./index.css";
import "@fontsource-variable/roboto-flex";


import "@fontsource/xanh-mono";

import Navbar from "./components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="light flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
