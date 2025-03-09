import Avatar from "./Avatar";
import Welcome from "./Welcome";

export default function Header() {
    return (
      <header className=" border-gray-400/30 border-b-[1px] p-1 shadow-2xl  flex justify-between  "
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5f5f5' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: "repeat",
        backgroundSize: "6px 6px",
      }}>
        <Welcome/>
        <Avatar/>
      </header>
    );
  }
  