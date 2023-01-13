import { connect } from "react-redux"
import Card from "./Card"

const Soma = props => {
    return (
        <Card title="Soma dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>10</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state=>{
    return {
        numeros: state.numeros
    }
}

export default connect()(Soma)