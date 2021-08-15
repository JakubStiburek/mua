import styled from "styled-components";

const Wrapper = styled.div`
  width: 38px;
  margin: 40px auto;
`

const Line = styled.div`
  border-bottom: 5px solid rgba(207, 202, 53, 0.9);
`

const EmptyLine = styled.div`
  border-bottom: 5px solid rgba(159,159,159,0);
`

const Burger = () => {
  return (
    <Wrapper>
      <Line/>
      <EmptyLine/>
      <Line/>
      <EmptyLine/>
      <Line/>
    </Wrapper>
  )
};

export default Burger;
