'use client'
import Image from "next/image";
import Button from "../common/button/Button";
import { Pencil } from "lucide-react";


const ProfileInformation = ()=>{
    const nameStaff = "John Doe";
    const staffSubject = "Mathematics";
    const staffAddress = "Lagos, Nigeria";
    const handleClick = () => {
      alert("Button is clicked");
      console.log("button is lcicked")
    }
  
    return (
      <div className="w-20/21 bg-white border-[0.063rem] border-gray-400/30 rounded-xl mx-auto flex justify-between items-center p-4 ">
        <div className="flex gap-7 items-center">
          <Image
            className="rounded-full cursor-pointer "
            //   onClick={()=>setProfileDetails(!profileDetails)}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Picture of the author"
            width={70}
            height={70}
          />
          <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-lg">{nameStaff}</h1>
            <div className="flex gap-3 items-center opacity-70">
              <p>{staffSubject}</p>
              <p className="border-l-[0.063rem] border-gray-400/30 h-[1.00rem] " ></p>
              <p className="">{staffAddress}</p>
            </div>
          </div>
        </div>
        <Button
        title="Edit"
        icon={<Pencil size={16} strokeWidth={1.75}/> }
        handleButton={
          handleClick}
        />
      </div>
    );
}

export default ProfileInformation;