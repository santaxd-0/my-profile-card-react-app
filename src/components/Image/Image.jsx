import "./image.css"

export function Image({ image }) {
    return (
        <div>
            <img className="image-style" src={image} alt="user image" />
        </div>
    )
}