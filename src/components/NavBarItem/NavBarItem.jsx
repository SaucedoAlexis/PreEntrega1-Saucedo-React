

import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from "./NavBarItem.module.css"
import { Link } from 'react-router-dom';
export const NavBarItem = ({ children, itemName }) => {
    
    const [active, setActive] = useState(false);
    

    const handleClick = () => {

        setActive(!active)
    }

    let classActive = active ? `${styles.active}` : "hidden"

    return (
        <li className={`${styles.item}`}>
            <div className='flex items-center justify-between'>
                <Link to={`/category/${itemName}`} >
                    {itemName}
                </Link>
                <button onClick={handleClick}><BsChevronDown color='white' /></button>
            </div>
            <ul className={`${classActive}`}>
                {children}
            </ul>
        </li>
    )
}
