import { connect } from "react-redux"
import { alterarNumeroMinimo } from "../store/actions/numeros"
import Card from "./Card"
import "./Intervalo.css"


const Intervalo = props => {
    const { min, max } = props.numeros
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                    />
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = State => {
    return {
        numeros: State.numeros
    }
}

const mapCreatorsToprops = state =>{
    return{
        alterarNumeroMinino(novoNumero){
            const adction = alterarNumeroMinimo(novoNumero)
        }
    }
}

export default connect(mapStateToProps)(Intervalo)