import Card from "./Card"

export default props => {
    return (
        <Card title="Média dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(props.max + props.min)/2}</strong>
                </span>
            </div>
        </Card>
    )
}