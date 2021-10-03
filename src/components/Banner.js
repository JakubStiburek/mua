import styled from "styled-components";
import {StyledHeading} from "./StyledHeading";
import {useEffect, useState} from "react";
import banner from "../localization/banner";

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

const Highlighted = styled(BannerText)`
  color: ${({ theme }) => theme.miaYellow};
`

const Banner = () => {
  const [version, setVersion] = useState(0);
  const { makeUp, items } = banner;

  useEffect(() => {
    const interval = setInterval(() => {
      setVersion(version === items.length - 1 ? 0 : version + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [version, items.length]);

  return (
    <Rect>
      <div>
        <BannerText>{ makeUp }</BannerText>
        <Highlighted>{items[version]} &nbsp;</Highlighted>
      </div>
    </Rect>
  )
};

export default Banner;
