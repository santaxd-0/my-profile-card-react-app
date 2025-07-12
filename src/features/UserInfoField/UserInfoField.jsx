import { UserInfoText } from "../UserInfoText/UserInfoText";
import { UserSubscribes } from "../../components/UserSubscribes/UserSubscribes";

import "./userinfofield.css";

export function UserInfoField({ User, isUserFollowed, setIsUserFollowed }){
    return (
        <div className="user-info-field-style">
            <UserInfoText name={User.name} surname={User.surname}
             user_icon={User.user_icon} user_info={User.info}/>
            <UserSubscribes userFollowers={User.followers}
             userSubscribes={User.subscribes}
             isAnUserFollowed={isUserFollowed}
             setIsAnUserFollowed={setIsUserFollowed}/>
        </div>
    )
}