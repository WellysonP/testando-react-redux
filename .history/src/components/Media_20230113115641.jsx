import { connect } from "react-redux"
import Card from "./Card"

const Media = props => {
    console.log(props.blabla)
    return (
        <Card title="Média dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        blabla: state.numeros
    }
}

export default connect(mapStateToProps)(Media)