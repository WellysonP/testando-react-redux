import { connect } from "react-redux"
import Card from "./Card"

const Sorteio =  props => {
    const {min, max} = props.numeros
    const aleatorio = Math.floor(Math.random()*(max-min)) + min
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

const mapStateToProps = state =>{
    return{
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Sorteio)