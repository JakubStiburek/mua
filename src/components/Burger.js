import styled from "styled-components";

const Wrapper = styled.div`
  width: 38px;
  margin: 40px auto;
`

const Line = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.miaYellow}
`

const EmptyLine = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.miaRed};
`

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 19px solid transparent;
  border-right:  19px solid transparent;
  border-top: 4.5px solid ${({ theme }) => theme.miaYellow};
`

const Burger = (props) => {
  if(!props.open){
    return (
      <Wrapper>
        <Line/>
        <EmptyLine/>
        <Line/>
        <EmptyLine/>
        <Line/>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Line/>
        <EmptyLine/>
        <Line/>
        <EmptyLine/>
        <Line/>
        <Arrow/>
      </Wrapper>
    )
  }

};

export default Burger;
