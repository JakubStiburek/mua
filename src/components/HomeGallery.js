import cover from '../media/homeGallery.jpg';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
`

const HomeGallery = () => {
  return (
    <Wrapper>
      <img src={cover} alt='Woman wearing make-up' width="206.33" height="418"/>
    </Wrapper>
  )
};

export default HomeGallery;
