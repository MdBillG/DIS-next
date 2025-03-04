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
      <div className="flex h-screen overflow-hidden" >
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="p-4 overflow-y-auto bg-[#f5f5f5]
        ">{children}</main>
      </div>
    </div>
      </body>
    </html>
  );
}
