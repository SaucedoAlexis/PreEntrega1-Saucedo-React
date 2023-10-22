import { CartWidget } from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button className={`navbar-toggler ${styles.hamburguer} my-2`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon bg-light`}></span>
                    </button>
                    <div className={`collapse navbar-collapse ${styles.navContent}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Lectura
                                </a>
                                <ul className={`dropdown-menu bg-dark`}>
                                    <li><a className="dropdown-item" href="#">Manga</a></li>
                                    <li><a className="dropdown-item" href="#">Manwha</a></li>
                                    <li><a className="dropdown-item" href="#">Novelas Ligeras</a></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ropa
                                </a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a className="dropdown-item" href="#">Remeras</a></li>
                                    <li><a className="dropdown-item" href="#">Buzos</a></li>
                                    <li><a className="dropdown-item" href="#">Pantalones</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accesorios
                                </a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a className="dropdown-item" href="#">Collares</a></li>
                                    <li><a className="dropdown-item" href="#">Aritos</a></li>
                                    <li><a className="dropdown-item" href="#">Anillos</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                    < CartWidget />
                </div>

            </nav>

        </>
    )
}
