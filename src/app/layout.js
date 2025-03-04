import { Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  display: "swap",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}
      
      >
        {children}
      </body>
    </html>
  );
}
