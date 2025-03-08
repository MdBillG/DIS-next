'use client'
import { LogOut, Mail, User, UserPen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter ,usePathname} from "next/navigation";

const Avatar =()=>{
    const [profileDetails,setProfileDetails] = useState(false)
    const router = useRouter();
        const nameStaff = "John Doe";
        const staffEmail= "JohnDoe@gmail.com"

        const handleEditprofile = () =>{
            router.push('/profile')
            setProfileDetails(!profileDetails)
        }
return (
    <div className="flex items-center gap-2">
        <div>
            <h1>{nameStaff}</h1>
        </div>
    <Image className="rounded-xl cursor-pointer "
    onClick={()=>setProfileDetails(!profileDetails)}
src="https://www.w3schools.com/howto/img_avatar.png"
alt="Picture of the author"
width={50}
height={50}
    />
    <div className="">
    {profileDetails && (
        <div className="absolute top-15 right-5 bg-white p-4 shadow-md border-[0.063rem] font-medium text-sm border-gray-500/30 rounded-md w-48 h-32 text-[#333333]">
              
              <div className="flex items-center gap-2">
              <User size={16}/>
              <h1>{nameStaff}</h1>
              </div>
              <div className="flex items-center gap-2 text-xs opacity-40">
              <Mail size={16} />
              <h1>{staffEmail}</h1>
              </div>
                <div className="flex flex-col mx-5 gap-2 mt-4 cursor-pointer">
                    <div className="flex gap-2 text-[#333333]">
                    <UserPen size={16} strokeWidth={1.75} />
                    <h1 onClick={()=>handleEditprofile()}>Edit Profile</h1>
                    </div>
                    <div className="flex  gap-2 ">
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