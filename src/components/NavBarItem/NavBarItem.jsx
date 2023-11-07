

import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from "./NavBarItem.module.css"

export const NavBarItem = ({ children, itemName }) => {

    const [active, setActive] = useState(false);
   

    const handleClick = () => {
        
        setActive(!active)
    }

    let classActive = active ? `${styles.active}` : "hidden"

    return (
        <li className={`${styles.item}`}>
            <div >
                <a href="#" className="">{itemName}</a> <button onClick={handleClick}><BsChevronDown color='white' /></button>
            </div>
            <ul className={`${classActive}`}>
                {children}
            </ul>
        </li>
    )
}
