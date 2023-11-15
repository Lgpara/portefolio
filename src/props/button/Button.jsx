import "./button.css"

export default function Button(props) {
    const { icon, text, containerClass, link } = props
    const redirect = (link)=>{
        window.location.href = link
    }

    return (
        <div onClick={link? ()=>redirect(link) : null} className={containerClass ? containerClass + " btn" : "btn"}>
            {icon}
            <p>{text}</p>
        </div>
    );
}