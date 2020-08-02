import styled, { css, keyframes } from 'styled-components'

const slidein = keyframes`
   from {
    top: -550px;
  }

  to {
    top: 0px;
  }
`;

const animation = (props) =>
  css`
    ${slidein} 3s;
  `;

export const LogoPlace = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  position: absolute;
  width: 500px;
  height: 550px;
  left: 100px;
  top: 0px;
  animation: ${animation};
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  

  background: #f7b11c;
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.25);
`;
export const Logo = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 115px;
  color: #2a2e2d;
  margin: 100px 0 0 50px;
`;

export const Media = styled.div`
  margin-left: 50px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin: 20px 20px 0 0;
  color: #2a2e2d;
`;

export const ImagePlace = styled.div`
  position: absolute;
  right: 50px;
  bottom: 40px;
`

export const Image = styled.img`
  width: 456px;
  height: 399px;
`
