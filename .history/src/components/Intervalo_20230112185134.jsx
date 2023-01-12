import Card from "./Card"
import "./Intervalo.css"


export default props => {
    const {min, max} = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} />
                </span>
            </div>
        </Card>
    )
}