import styled from "styled-components";
import {useEffect, useState} from "react";

const Rect = styled.div`
  background: #8C3B3BCC;
  width: 100%;
  height: 526px;
`
const Text = styled.h1`
  position: relative;
  top: 110px;
  left: 38%;
  font-size: 36px;
  color: #FFF4F5;
  line-height: 18.23px;
  font-weight: 100;
  writing-mode: vertical-lr;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  margin: unset;
`

const textVersions = ["Make-up na svatbu", "Make-up na focení", "Denní make-up"];

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
      <Text>{textVersions[textVersion]}</Text>
    </Rect>
  )
};

export default MenuBanner;
