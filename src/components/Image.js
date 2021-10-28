import styled from "styled-components";

const Wrapper = styled.div``

const Image = ({ src, width = 270, height = 270, alt = "makeup model" }) => {
  return (
    <Wrapper>
      <img src={src} width={width} height={height} alt={alt}/>
    </Wrapper>
  )
};

export default Image;
