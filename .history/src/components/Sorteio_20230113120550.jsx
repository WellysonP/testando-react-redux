import { connect } from "react-redux"
import Card from "./Card"

const Sorteio =  props => {
    return (
        <Card title="Sorteio entre os Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>4</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state =>{
    return{
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio)