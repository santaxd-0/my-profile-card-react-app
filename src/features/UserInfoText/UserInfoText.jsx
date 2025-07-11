import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader"
import { UserInfo } from "../../components/UserInfo/UserInfo"

import "./user_info_text.css"

export function UserInfoText({ name, surname, user_icon, user_info}){
    return (
        <div className="user-info-text-style">
            <ProfileHeader name={name} surname={surname} user_icon={user_icon}/>
            <UserInfo aboutUser={user_info}/>
        </div>
    )
}