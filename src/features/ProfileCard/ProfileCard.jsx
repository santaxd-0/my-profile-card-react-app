import { Image } from "../../components/Image/Image"
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader"
import { UserInfo } from "../../components/UserInfo/UserInfo"
import { UserSubscribes } from "../../components/UserSubscribes/UserSubscribes"

import "./profile_card.css"

import UserImage from "../../assets/user_photo.jpg"
import UserIcon from "../../assets/react.svg"


const userInfo = {
  user_image: UserImage,
  user_icon: UserIcon,
  name: "Alexander",
  surname: "Zhuravel",
  info: "I am a beginner fullstack developer who is interesting in programming!",
  followers: 418,
  subsrcribes: 12,
}


export function ProfileCard(){
    return (
        <div className="profile-card-style">
            <Image image={userInfo.user_image} />
            <ProfileHeader name={userInfo.name} surname={userInfo.surname}
             user_icon={userInfo.user_icon}/>
            <UserInfo aboutUser={userInfo.info}/>
            <UserSubscribes userFollowers={userInfo.followers}
             userSubscribes={userInfo.subsrcribes}/>
        </div>
    )
}
