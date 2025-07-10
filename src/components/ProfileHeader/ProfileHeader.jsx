import "./profile_header.css";

export function ProfileHeader({ name, surname, user_icon }){
    return (
        <div className="user-header-style">
            <div>
                <h2>{name} {surname}</h2>
            </div>
            <div>
                <img src={user_icon} alt="user_icon" />
            </div>
        </div>
    )
}