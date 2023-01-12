import "./Card.css"

export default props => {
    return (
        <div className="Card">
            <div className="Header">
                <span>{props.title}</span>
            </div>
            <div className="Content">

            </div>
        </div>
    )
}