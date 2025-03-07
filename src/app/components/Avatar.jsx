'use client'
import { LogOut, Mail, User, UserPen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Avatar =()=>{
    const [profileDetails,setProfileDetails] = useState(false)
        const nameStaff = "John Doe";
        const staffEmail= "JohnDoe@gmail.com"
return (
    <div className="flex items-center gap-2">
        <div>
            <h1>{nameStaff}</h1>
        </div>
    <Image className="rounded-full cursor-pointer "
    onClick={()=>setProfileDetails(!profileDetails)}
src="https://www.w3schools.com/howto/img_avatar.png"
alt="Picture of the author"
width={50}
height={50}
    />
    <div className="">
    {profileDetails && (
        <div className="absolute top-15 right-5 bg-white p-4 shadow-md border-[1px] font-medium text-sm border-gray-500/30 rounded-md w-56 h-40">
              
              <div className="flex items-center gap-2">
              <User size={16}/>
              <h1>{nameStaff}</h1>
              </div>
              <div className="flex items-center gap-2">
              <Mail size={16} />
              <h1>{staffEmail}</h1>
              </div>

                <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="flex items-centxer items-baseline gap-2">
                    <UserPen size={16} strokeWidth={1.75} />
                    <h1>Edit Profile</h1>
                    </div>
                    <div className="flex items-center gap-2">
                    <LogOut size={16} strokeWidth={1.75}/>
                    <h1>Logout</h1>

                    </div>

                </div>
        </div>
    )}
    </div>


    <div>

    </div>
    </div>

)
}

export default Avatar;