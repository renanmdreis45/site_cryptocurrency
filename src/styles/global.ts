import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

  body {
    background: ${props => props.theme.colors.primary}
    font-size: 14px;
    color: #333;
    font-family: sans-serif;
  }

`;
