import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo.png";

interface Props {
  themeStatus: boolean;
  onSetTheme(): void;
}
const NavBar: React.FC<Props> = ({themeStatus, onSetTheme}) => {
  return (
    <nav className="shadow-[0_3px_8px_rgba(0,0,0,0.24)] h-16 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <img className="w-10 h-10" alt="logo" src={Logo}/>
        <h1 className="text-lg font-bold ml-4">Crypto's</h1>
      </div>
      <div>
        {themeStatus && (
          <FontAwesomeIcon
            onClick={onSetTheme}
            className="cursor-pointer"
            icon={faSun}
          />
        )}
        {!themeStatus && (
          <FontAwesomeIcon
            onClick={onSetTheme}
            className="cursor-pointer"
            icon={faMoon}
          />
        )}
      </div>
    </nav>
  );
};
export default NavBar;