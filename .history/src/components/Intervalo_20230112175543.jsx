import Card from "./Card"
import "./Intervalo.css"


export default props =>{
    return(
        <Card title="Intervalo de Números">
            <span>
                <strong>Mínimo</strong>
                <input type="number" value={0}/>
            </span>
            <span>
                <strong>Máximo</strong>
                <input type="number" value={10}/>
            </span>
        </Card>
    )
}