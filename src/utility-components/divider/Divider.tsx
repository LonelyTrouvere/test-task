import './Divider.css'
import { DivProps } from './type'

function Divider(props: DivProps) {
    return <div className="divider" {...props}></div>
}

export default Divider