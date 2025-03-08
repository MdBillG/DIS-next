import ProfileName from "./Profilename"

const Profile = () => {
    return (
        <div className="w-[99%] bg-white border-[0.063rem] border-gray-500/30 rounded-md mx-auto">
            <h1>Profile</h1>
            <p>This is the profile page</p>
            <ProfileName/>
        </div>
    )
}
export default Profile