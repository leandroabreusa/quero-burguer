import logoIMG from '../../assets/logo.png';
import './styles.css';
import { IconContext } from "react-icons";
import { MdMenuBook } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';

function Header() {
    return (
        <div className="menu">
            <div className="menu-items">
                <div className="logo">
                    <img src={logoIMG} alt="Logo Quero Burguer" /> <p>Quero Burguer</p>
                </div>

                <nav className="list-menu">
                    <IconContext.Provider value={{className: 'react-icons'}}>
                        <ul className="list-links">
                            <li><MdMenuBook /></li>
                            <li><FaShoppingCart /></li>
                            <li><BiUser /></li>
                        </ul>
                    </IconContext.Provider>
                </nav>
                
            </div>
        </div>
    );
}

export default Header;