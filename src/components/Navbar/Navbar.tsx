import React, { useContext } from 'react'
import Logo from './logo.png'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import {Container} from './styles'

interface Props {
  toggleTheme(): void
}

const Navbar: React.FC<Props> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);

    return(
              <Container className="shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
                  <div className="flex items">
                    <img src={Logo} alt="logo"/>
                    <h1 className="text-lg font-bold ml-4">CryptoFolio</h1>
                  </div>
                  <Switch
                   onChange={toggleTheme}
                   checked = {title === 'dark'}
                   checkedIcon= {false}
                   uncheckedIcon = {false}
                   height={10}
                   width = {40}
                   handleDiameter={20}
                   offColor={shade(0.15, colors.primary)}
                   onColor={colors.secundary}/>

              </Container>
    )
};

export default Navbar;