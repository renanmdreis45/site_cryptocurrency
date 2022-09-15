import styled from 'styled-components';

export const Container = styled.div `
  height: 60px;
  background: #222222;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 30px;

  div {
    display:flex;
    align-items: center;
    img {
        width:144px;
        height:96px;
    }
  }
`;