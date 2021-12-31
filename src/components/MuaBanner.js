import styled from "styled-components";
import {StyledHeading} from "./StyledHeading";

const Rect = styled.div`
  background: ${({ theme }) => theme.miaRed};
  width: 100%;
  height: 100%;
`
const BannerText = styled(StyledHeading)`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  line-height: 18.23px;
  text-align: left;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`
const Wrapper = styled.div`
  position: relative;
  top: 35px;
  left: 17.5px;
  width: 156px;
  @media (min-width: 768px) {
    width: 500px;
  }
`

const MuaBanner = (props) => {
  return (
    <Rect>
      <Wrapper>
        <BannerText>{props.children}</BannerText>
      </Wrapper>
    </Rect>
  )
};

export default MuaBanner;
