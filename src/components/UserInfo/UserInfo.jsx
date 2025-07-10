import "./user_info.css"

export function UserInfo({ aboutUser }){
    return (
        <div className="about-user-style">
            <p>{aboutUser}</p>
        </div>
    )
}