import { Link } from "react-router-dom"
import './menu.styles.css'

const Menu = () => {
    return(
        
            <ul className="navbar">
                <li>
                    <Link className="link" to='/'>Home</Link>
                </li>

                <li>
                    <Link className="link" to='/lista'>Lista de Tarefas</Link>
                </li>

                
            </ul>
        



    )
}
export default Menu