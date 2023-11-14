import "./button.css"

export default function Button(props) {
    const { icon, text, containerClass } = props

    return (
        <div className={containerClass ? containerClass + " btn" : "btn"}>
            {icon}
            <p>{text}</p>
        </div>
    );
}