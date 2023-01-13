import { connect } from "react-redux"
import Card from "./Card"

const Media = props => {
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

export default connect()(Media)