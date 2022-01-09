import styled from "styled-components";

const Rect = styled.div`
  margin-top: 31.516px;
  background: ${({theme}) => theme.miaRed};
  width: 312px;
  border-radius: 25px 25px 0 0;
  @media (min-width: 481px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`
const Title = styled.h1`
  color: ${({ theme }) => theme.miaWhite};
  font-family: 'Archivo', sans-serif;
  font-weight: 100;
  font-size: 48px;
  line-height: 52.22px;
  text-align: center;
  margin: 0;
  @media (min-width: 481px) {
    line-height: 60px;
  }
  @media (min-width: 768px) {
    line-height: 119px;
  }
`

const Logo = (props) => (
  <Rect>
    <Title>{props.children}</Title>
  </Rect>
)

export default Logo;

