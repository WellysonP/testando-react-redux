import Card from "./Card"

export default props => {
    return (
        <Card title="Soma dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{props.minimo + props.maximo}</strong>
                </span>
            </div>
        </Card>
    )
}