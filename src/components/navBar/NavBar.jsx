import { CartWidget } from "../CartWidget/CartWidget"
import style from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <>
            <nav className={`${style.nav}`}>
                <div>
                    <div className={`${style.listDropDown}`}>
                        <i className={`bi bi-list ${style.listDropDown__icon}`}></i>
                        <ul className={`${style.items}`}>
                            <li className={`${style.item}`}>

                                <a href="" className={`${style.item__name}`}>Ropa <i className={`bi bi-chevron-down ${style.chevronIcon}`}></i></a>
                                <ul className={`${style.subitems}`}>
                                    <li><a href="">Buzos</a></li>
                                    <li><a href="">Remeras</a></li>
                                    <li><a href="">Pantalones</a></li>
                                </ul>
                            </li>

                            <li className={`${style.item}`}>

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
                            </li>

                        </ul>
                    </div>
                </div>
                < CartWidget />

            </nav>

        </>
    )
}
