

import { NavBarItem } from '../NavBarItem/NavBarItem'
import { NavBarSubItems } from '../NavBarSubItems/NavBarSubItems'

export const AsideMenu = () => {
    
    return (
        <div className={` inline-block h-screen w-0 min absolute`}>
            <ul className={` flex flex-col gap-2 pl-3`}>
                <a href="#">Home</a>
                <NavBarItem itemName="Ropa">

                </NavBarItem>




            </ul>
        </div>
    )
}
