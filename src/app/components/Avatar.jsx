'use client'
import Image from "next/image";
import { useState } from "react";

const Avatar =()=>{
    const [profileDetails,setProfileDetails] = useState(false)
        const nameStaff = "John Doe";
return (
    <div className="flex items-center gap-2">
        <div>
            <h1>{nameStaff}</h1>
        </div>
    <Image className="rounded-full cursor-pointer"
    onClick={()=>setProfileDetails(!profileDetails)}
src="https://www.w3schools.com/howto/img_avatar.png"
alt="Picture of the author"
width={50}
height={50}
    />
    {profileDetails && (
        <div className="absolute top-15 right-5 bg-white p-4 shadow-2xl">
                <h1>{nameStaff}</h1>
                <h1>Logout</h1>
        </div>
    )}

    <div>

    </div>
    </div>

)
}

export default Avatar;