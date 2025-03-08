import { Montserrat} from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  display: "swap",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <div className="flex h-screen overflow-hidden text-[#333333] " >
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-4 overflow-y-auto bg-[#f5f5f5]
        "
        style={{
          backgroundColor: "#f5f5f5",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "repeat",
          backgroundSize: "6px 6px",
        }}>{children}</main>
      </div>
    </div>
      </body>
    </html>
  );
}
