import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import Trending from "./components/Trending/trending"

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [theme, setTheme] = useState(light);
  const [themeLight, setThemeLight] = useState(true);
  const [coinId, setCoinId] = useState("")
  const [modalStatus, setModalStatus] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const onCloseModalHandler = (id: string) => {
    setModalStatus((status) => !status);

    {!id ? setCoinId("") : setCoinId(id)}
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme}/>
        <Trending themeStatus={themeLight} onsetModal={onCloseModalHandler}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
