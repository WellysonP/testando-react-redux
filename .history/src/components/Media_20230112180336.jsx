import Card from "./Card"


export default props => {
    return (
        <Card title="Média dos Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={0} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={10} />
                </span>
            </div>
        </Card>
    )
}