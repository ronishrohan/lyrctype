import "./index.css";

import "@fontsource/syne";
import "@fontsource/xanh-mono";

import Navbar from "./components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
