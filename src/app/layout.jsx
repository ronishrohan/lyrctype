import "./index.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">{children}</body>
    </html>
  );
}
