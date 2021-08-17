import styled from "styled-components";
import {StyledHeading} from "./StyledHeading";

const Rect = styled.div`
  margin-top: 31.516px;
  background: ${({ theme }) => theme.miaRed};
  width: 312px;
  border-radius: 25px 25px 0px 0px ;
`
const Title = styled(StyledHeading)`
  font-size: 48px;
  line-height: 52.22px;
`

const Logo = (props) => {
  return (
    <Rect>
      <Title>{props.children}</Title>
    </Rect>
  )
};

export default Logo;

