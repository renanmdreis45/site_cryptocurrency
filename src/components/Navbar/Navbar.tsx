import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from './logo.png'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'


interface ThemeProps {
  themeStatus: boolean;
}

const Navbar = ({themeStatus}:ThemeProps) =>{
    return(
            <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] flex items-center">
              <div className="flex items-center">
                <img src={Logo} className='h-24 w-36'/>           
                <span className="text-lg text-black font-bold"> Crypto's </span>
              </div>
              <div>
                 {themeStatus && (
                    <FontAwesomeIcon
                       className="cursor-pointer"
                       icon={faSun}
                     />
                 )}
                {!themeStatus && (
                    <FontAwesomeIcon
                       className="cursor-pointer"
                       icon={faMoon}/>
                )}
             </div>            
            </nav>
    )
}

export default Navbar;