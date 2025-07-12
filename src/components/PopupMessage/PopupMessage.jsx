import "./popupmessage.css"

export function PopupMessage({ text, style }){
    return (
        <div className="popup-message-style" style={style}>
            <b>{text}</b>
        </div>
    )
}