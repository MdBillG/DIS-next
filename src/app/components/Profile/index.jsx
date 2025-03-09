import ProfileInformation from "./ProfileInformation"
import ProfileName from "./Profilename"

const Profile = () => {
    return (
        <div className="w-[99%] bg-white border-[0.063rem] border-gray-400/30 rounded-xl mx-auto">
     <div  className="flex flex-col gap-4 py-10">
     <ProfileName/>
            <ProfileInformation/>
     </div>
       
        </div>
    )
}
export default Profile