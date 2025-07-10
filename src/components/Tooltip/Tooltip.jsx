import "./tooltip.css";

export function Tooltip({ tooltipText }){
    return (
        <span className="tooltip-text-style">
            {tooltipText}
        </span>
    )
}