import styled from "styled-components";

const Rect = styled.div`
  background: #8C3B3BCC;
  width: 100%;
  height: 100%;
`
const Text = styled.h1`
  font-size: 14px;
  color: #FFF4F5;
  line-height: 18.23px;
  font-weight: 100;
  text-align: left;
  margin: 0;
`
const Wrapper = styled.div`
  position: relative;
  top: 35px;
  left: 17.5px;
  width: 156px;
`

const MuaBanner = (props) => {
  return (
    <Rect>
      <Wrapper>
        <Text>{props.children}</Text>
      </Wrapper>
    </Rect>
  )
};

export default MuaBanner;
