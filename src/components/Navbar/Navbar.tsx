import React, { useContext } from 'react'
import Logo from './logo.png'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'


interface Props {
  toggleTheme(): void
}

const Navbar: React.FC<Props> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);

    return(
            <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] flex items-center">
              <div className="flex items-center">
                <img src={Logo} className='h-24 w-36'/>           
                <span className="text-lg text-black font-bold"> Crypto's </span>
              </div>
              <div>
                 <Switch
                   onChange={toggleTheme}
                   checked = {title === 'dark'}
                   checkedIcon= {false}
                   uncheckedIcon = {false}
                   height={10}
                   width = {40}
                   handleDiameter={20}
                   offColor={shade(0.15, colors.primary)}
                   onColor={colors.secundary}

                 />
             </div>            
            </nav>
    )
};

export default Navbar;