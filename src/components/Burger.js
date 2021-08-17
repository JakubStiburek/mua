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
      </Wrapper>
    )
  }

};

export default Burger;
