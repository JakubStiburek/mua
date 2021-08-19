import styled from "styled-components";

const Wrapper = styled.div`
  width: max-content;
  margin: 22.5px auto;
`

const Icon = styled.svg`
  width: 60px;
  height: 60px;
  fill: ${({ theme }) => theme.miaYellow};
  &:hover {
    cursor: pointer;
  }
`

const IconOpen = styled(Icon)`
  fill: ${({ theme }) => theme.miaWhite};
  &:hover {
    cursor: pointer;
  }
`

const Burger = ({ open }) => {
  if(!open){
    return (
      <Wrapper>
        <Icon xmlns="http://www.w3.org/2000/svg" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </Icon>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <IconOpen xmlns="http://www.w3.org/2000/svg" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </IconOpen>
      </Wrapper>
    )
  }

};

export default Burger;
