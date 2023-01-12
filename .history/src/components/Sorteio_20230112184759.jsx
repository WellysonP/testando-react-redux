import Card from "./Card"

export default props => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (2 - 1)) + 1
    console.log(aleatorio)
    return (
        <Card title="Sorteio entre os Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}