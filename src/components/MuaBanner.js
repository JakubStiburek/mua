import styled from "styled-components";

const Rect = styled.div`
  background: ${({theme}) => theme.miaRed};
  width: 100%;
  height: 100%;
`
const BannerText = styled.h1`
  color: ${({theme}) => theme.miaWhite};
  font-weight: 100;
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

const MuaBanner = (props) => (
  <Rect>
    <Wrapper>
      <BannerText>{props.children}</BannerText>
    </Wrapper>
  </Rect>
)

export default MuaBanner;
