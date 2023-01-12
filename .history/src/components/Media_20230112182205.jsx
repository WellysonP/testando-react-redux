import Card from "./Card"

export default props => {
    return (
        <Card title="Média dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(props.maximo + props.minimo)/2}</strong>
                </span>
            </div>
        </Card>
    )
}