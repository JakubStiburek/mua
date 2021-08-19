import styled, {keyframes} from "styled-components";
import {StyledHeading} from "./StyledHeading";

const Rect = styled.div`
  background: ${({ theme }) => theme.miaRed};
  width: 100%;
  height: 100%;
`
const BannerText = styled(StyledHeading)`
  position: relative;
  top: 1em;
  font-size: 36px;
  line-height: 18.23px;
  letter-spacing: 2px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin: auto;
`

const switchHighlighted = keyframes`
  25% {
    content: "Svatební\\00a0";
  }
  50% {
    content: 'Denní\\00a0';
  }
  75% {
    content: 'Večerní\\00a0';
  }
  100% {
    content: 'Foto\\00a0';
  }
`

const Highlighted = styled(BannerText)`
  color: ${({ theme }) => theme.miaYellow};
  &:before {
    content: 'Svatební\\00a0';
    animation: ${switchHighlighted} infinite 10s;
  }
`

const Banner = () => {

  return (
    <Rect>
      <div>
        <BannerText>make-up</BannerText>
        <Highlighted></Highlighted>
      </div>
    </Rect>
  )
};

export default Banner;
