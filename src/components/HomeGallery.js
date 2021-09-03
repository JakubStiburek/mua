import mua2 from '../media/mua2.jpg';
import mua3 from '../media/mua3.jpg';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const HomeGallery = () => {
  return (
    <Wrapper>
      <img src={mua2} alt='Woman wearing maku up' width="206.33" height="104.5"/>
      <img src={mua3} alt='Woman wearing maku up' width="206.33" height="104.5"/>
      <img src={mua2} alt='Woman wearing maku up' width="206.33" height="104.5"/>
      <img src={mua3} alt='Woman wearing maku up' width="206.33" height="104.5"/>
    </Wrapper>
  )
};

export default HomeGallery;
