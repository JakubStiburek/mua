import styled from "styled-components";
import {StyledHeading} from "./StyledHeading";

const Rect = styled.div`
  margin-bottom: 31.516px;
  background: ${({ theme }) => theme.miaRed};
  height: 80px;
  width: 312px;
  border-radius: 0 0 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Text = styled(StyledHeading)`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  line-height: 18.23px;
  text-align: center;
  margin: 0;
`

const Underlined = styled(Text)`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <Rect>
      <Text>
        <Underlined onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
          Zpět nahoru
        </Underlined>
      </Text>
      <Text>Vytvořil Jakub Stibůrek 2021</Text>
    </Rect>
  )
};

export default Footer;
