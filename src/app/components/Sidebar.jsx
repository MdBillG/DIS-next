'use client'
import { HomeIcon } from "lucide-react";
import { useRouter ,usePathname} from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const sideBar = [
  {
    name: "Dashboard",
    href: "/",
    icon: <HomeIcon color="black" className="h-6 w-6  mr-2 "  />,
  },
  {
    name: "About",
    href: "/about",
    icon: <HomeIcon color="black" className="h-6 w-6  mr-2" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <HomeIcon color="black" className="h-6 w-6  mr-2" />,
  },
];

const schoolName = "Darul Islah";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [selected,setSelected] = useState(0)

  useEffect(() => {
    const currentIndex = sideBar.findIndex(item => item.href === pathname);
    setSelected(currentIndex !== -1 ? currentIndex : 0);
  }, [pathname]);

  const handleClick= (index,href)=>{
    console.log("index",index)
    setSelected(index)
router.push(href)
  }
  return (
    <aside className="text-white w-64 h-screen p-4 shadow-2xl shadow-[#f5f5f5] border-r-[0.063rem] border-gray-400/30"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5f5f5' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
      backgroundSize: "repeat",
      backgroundSize: "6px 6px",
    }}>
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl font-bold text-gray-700 mt-1 ">
          {schoolName}
        </div>
        <div className="border-gray-500/30 border-b-[0.063rem] w-full my-2.5"></div>
        <div className="mt-10 flex flex-col gap-8 " >
          {sideBar.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index ,item.href)}
              className={`flex items-center mb-2 cursor-pointer   p-3 rounded-lg hover:bg-white
                ${selected === index ? "bg-[#f5f5f5] text-black border-[0.063rem] border-gray-500/30" : "text-white"}`}
            >
              {item.icon}
              <span className=" text-black ">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}