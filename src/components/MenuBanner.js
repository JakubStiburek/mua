import styled from "styled-components";
import {useEffect, useState} from "react";
import {StyledHeading} from "./StyledHeading";

const Rect = styled.div`
  background: ${({ theme }) => theme.miaRed};
  width: 100%;
  height: 526px;
`
const BannerText = styled(StyledHeading)`
  position: relative;
  top: 110px;
  left: 38%;
  font-size: 36px;
  line-height: 18.23px;
  letter-spacing: 2px;
  writing-mode: vertical-lr;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  margin: unset;
`

const Highlited = styled(BannerText)`
  color: ${({ theme }) => theme.miaYellow};
`

const textVersions = [
  <div>
    <Highlited>na svatbu</Highlited>
    <BannerText>Make-up&nbsp;</BannerText>
  </div>,
  <div>
    <Highlited>na focení</Highlited>
    <BannerText>Make-up&nbsp;</BannerText>
  </div>,
  <div>
    <BannerText>make-up</BannerText>
    <Highlited>Denní&nbsp;</Highlited>
  </div>
];


const MenuBanner = () => {
  const [textVersion, setTextVersion] = useState(0);

  const setText = () => {
    setTimeout(() => { setTextVersion(1) }, 3000);
    setTimeout(() => { setTextVersion(2) }, 6000);
    setTimeout(() => { setTextVersion(0) }, 9000);
  }

  useEffect(() => { setText() }, [])

  return (
    <Rect>
      {textVersions[textVersion]}
    </Rect>
  )
};

export default MenuBanner;
