import Card from "./Card"
import "./Intervalo.css"


export default props => {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} 
                    onChange={e=>props.onChangedMin(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10}
                    onChange={e=>props.onChangedMax(+e.target.value)} 
                    />
                </span>
            </div>
        </Card>
    )
}