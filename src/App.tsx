import React, {useState} from 'react';
import {Trending} from "./components/Trending/trending"
import CryptoCurrencies from './components/Criptocurrency/CryptoCurrencies';
import {Modal} from "./ui/Modal";

import Navbar from './components/Navbar/Navbar';

function App() {

  const [modalStatus, setModalStatus] = useState(false);
  const [coinId, setCurrentCoinid] = useState("");
  const [themeLight, setTheme] = useState(true);

  const onsetThemeHandler = () => {
    setTheme((status) => !status);
  };

  const onCloseModalHandler = (id: string) => {
    setModalStatus((status) => !status);
    if (!id) {
      setCurrentCoinid("");
    } else {
      setCurrentCoinid(id);
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
      {modalStatus && (
        <Modal 
          themeStatus={themeLight}
          onCoinId={coinId}
          onsetModal={onCloseModalHandler}
        />
      )}
    </div>
  );
}


export default App;
