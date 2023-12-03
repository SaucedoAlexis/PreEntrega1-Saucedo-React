import { useState } from "react";
import { CartWidget } from "../CartWidget/CartWidget"
import { NavBarItem } from "../NavBarItem/NavBarItem";
import { NavBarSubItems } from "../NavBarSubItems/NavBarSubItems";
import styles from "./NavBar.module.css"
import { BsList } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [displayItem, setdisplayItem] = useState(`${styles.animacionCerrar}`)
    const showItems = () => {
        displayItem.includes(`${styles.animacionCerrar}`)
            ? setdisplayItem(`${styles.animacionApertura} ${styles.itemsHideOpen}`)
            : setdisplayItem(`${styles.animacionCerrar} ${styles.itemsHideClose}`)

    }
    return (
        <>
            <nav className={`${styles.nav}`}>

                <button className={`${styles.hamburguer}`}>
                    <BsList className=" text-white text-3xl" onClick={showItems} />
                </button>

                <ul className={` ${styles.navItems} ${displayItem} `}>
                    <li>
                        <button>
                            <MdCancel className={`${styles.cancel} text-2xl block`} onClick={showItems} />
                        </button>
                    </li>
                    <Link to={"/"}>
                        <img src="/logo.png" alt="" className="w-8 bg-white border-4 border-white mx-auto" />
                    </Link>
                    <li className="pl-1 md:pl-0">
                        <Link to={"/"} className="font-bold">
                            Home
                        </Link>
                    </li>

                    <NavBarItem itemName="Ropa">
                        <NavBarSubItems subItemName="Remeras" />
                        <NavBarSubItems subItemName="Buzos" />
                        <NavBarSubItems subItemName="Pantalones" />
                    </NavBarItem>

                    <NavBarItem itemName="Lectura">
                        <NavBarSubItems subItemName="Mangas" />
                        <NavBarSubItems subItemName="Manwhas" />
                        <NavBarSubItems subItemName="Novelas ligeras" />
                    </NavBarItem>

                    <NavBarItem itemName="Accesorios">
                        <NavBarSubItems subItemName="Anillos" />
                        <NavBarSubItems subItemName="Aritos" />
                        <NavBarSubItems subItemName="Pulseras" />
                    </NavBarItem>

                    <li className="pl-1 md:pl-0">
                        <a href="#" className="font-bold whitespace-nowrap">Contact Us</a>
                    </li>
                </ul>

                <Link to={"/cart"}>
                    < CartWidget />
                </Link>
            </nav>

        </>
    )
}
