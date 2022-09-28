import React, {useState} from 'react';
import {Trending} from "./components/Trending/trending"
import CryptoCurrencies from './components/Criptocurrency/CryptoCurrencies';

import Navbar from './components/Navbar/Navbar';

function App() {

  const [modalStatus, setModalStatus] = useState(false);
  const [coinId, setCurrenCoinid] = useState("");
  const [themeLight, setTheme] = useState(true);

  const onsetThemeHandler = () => {
    setTheme((status) => !status);
  };

  const onCloseModalHandler = (id: string) => {
    setModalStatus((status) => !status);
    if (!id) {
      setCurrenCoinid("");
    } else {
      setCurrenCoinid(id);
    }
  };

  return (
    <div className={`${themeLight === true ? "" : "bg-[#0a1929] text-white"}`}>
      <Navbar themeStatus={themeLight} onSetTheme={onsetThemeHandler} />
      <Trending themeStatus={themeLight} onsetModal={onCloseModalHandler} />
      <CryptoCurrencies
        themeStatus={themeLight}
        onsetModal={onCloseModalHandler}
      />
    </div>
  );
}


export default App;
