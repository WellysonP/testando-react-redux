import Card from "./Card"

export default props => {
    const {min , max} = props
    return (
        <Card title="Sorteio entre os Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>7</strong>
                </span>
            </div>
        </Card>
    )
}