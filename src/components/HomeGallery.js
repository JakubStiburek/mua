import cover2 from '../media/cover2.jpg';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`

const HomeGallery = () => {
  return (
    <Wrapper>
      <img src={cover2} alt='Woman wearing make-up' width="206.33" height="418"/>
    </Wrapper>
  )
};

export default HomeGallery;
