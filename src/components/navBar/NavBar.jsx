import { CartWidget } from "../CartWidget/CartWidget"
import style from "./NavBar.module.css"
import { BsList } from 'react-icons/bs';
export const NavBar = () => {
    return (
        <>
            <nav className={`flex justify-between items-center p-4`}>
                <div>
                    <div className={`${style.listDropDown}`}>
                        <BsList className="text-white text-3xl" />

                        <ul className={`${style.items}`}>
                            <li className={`${style.item}`}>

                                <a href="" className={`${style.item__name}`}>Ropa <i className={`bi bi-chevron-down ${style.chevronIcon}`}></i></a>
                                <ul className={`${style.subitems}`}>
                                    <li><a href="">Buzos</a></li>
                                    <li><a href="">Remeras</a></li>
                                    <li><a href="">Pantalones</a></li>
                                </ul>
                            </li>

                            {/* <li className={`${style.item}`}>

                                <a href="" className={`${style.item__name}`}>Accesorios <i className={`bi bi-chevron-down ${style.chevronIcon}`}></i></a>
                                <ul className={`${style.subitems}`}>
                                    <li><a href="">Aritos</a></li>
                                    <li><a href="">Anillos</a></li>
                                    <li><a href="">Collares</a></li>
                                </ul>
                            </li>
                            <li className={`${style.item}`}>

                                <a href="" className={`${style.item__name}`}>Lectura <i className={`bi bi-chevron-down ${style.chevronIcon}`}></i></a>
                                <ul className={`${style.subitems}`}>
                                    <li><a href="">Manga</a></li>
                                    <li><a href="">Manwha</a></li>
                                    <li><a href="">Novelas Ligeras</a></li>
                                </ul>
                            </li> */}

                        </ul>
                    </div>
                </div>
                < CartWidget />

            </nav>

        </>
    )
}
