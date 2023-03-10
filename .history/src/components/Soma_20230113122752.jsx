import { connect } from "react-redux"
import Card from "./Card"

const Soma = props => {
    const { min, max } = props.numeros
    return (
        <Card title="Soma dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Soma)