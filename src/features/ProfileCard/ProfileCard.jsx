import { Image } from "../../components/Image/Image"
import { UserInfoField } from "../UserInfoField/UserInfoField"

import "./profile_card.css"
import "../../components/UserInfo/user_info.css"
import "../../components/UserSubscribes/user_subscribes.css"
import "../../components/Image/image.css"
import "../UserInfoField/userinfofield.css"

import UserImage from "../../assets/user_photo.jpg"
import UserIcon from "../../assets/react.svg"


const userInfo = {
  user_image: UserImage,
  user_icon: UserIcon,
  name: "Alexander",
  surname: "Zhuravel",
  info: "I am a beginner fullstack developer who is interesting in programming!",
  followers: 418,
  subscribes: 12,
}


export function ProfileCard(){
    return (
        <div className="profile-card-style">
            <Image image={userInfo.user_image} />
            <UserInfoField User={userInfo}/>
        </div>
    )
}
