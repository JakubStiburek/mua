import styled from "styled-components";

const Rect = styled.div`
  margin-top: 31.516px;
  background: ${({ theme }) => theme.miaRed};
  width: 312px;
  border-radius: 25px 25px 0px 0px ;
`
const Text = styled.h1`
  text-align: center;
  font-size: 48px;
  color: ${({ theme }) => theme.miaWhite};
  font-family: 'Archivo', sans-serif;
  line-height: 52.22px;
  font-weight: 100;
  margin: 0;
`

const Logo = (props) => {
  return (
    <Rect>
      <Text>{props.children}</Text>
    </Rect>
  )
};

export default Logo;

