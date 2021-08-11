import styled from "styled-components";

const Rect = styled.div`
  background: #8C3B3BCC;
  width: 100%;
  height: 526px;
`
const Text = styled.h1`
  position: relative;
  top: 105px;
  left: 41.33px;
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

const MenuBanner = () => {
  return (
    <Rect>
      <Text>Make-up na svatbu</Text>
    </Rect>
  )
};

export default MenuBanner;
