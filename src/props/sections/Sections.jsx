import "./sections.css"

export default function Section(props){
    return(
        <section id={props.id} className={props.name}>
            {props.title?<div className="titleContainer"><h2 className="sectionTitle">{props.title}</h2></div>  : null}
            {props.content}
        </section>
        
    )
}