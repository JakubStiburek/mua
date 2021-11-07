import {StyledHeading2} from "./StyledHeading";
import Image from "./Image";
import {StyledText} from "./StyledText";

const Article = ({heading, image: [src, alt, width, height], content, media, topic, publishedAt}) => {
  return (
    <div>
      <StyledHeading2>{heading}</StyledHeading2>
      <Image src={src} alt={alt} width={width} height={height}/>
      {content}
      {media}
      {/*map topic using ramda*/}
      <StyledText>{topic}</StyledText>
      <StyledText>{publishedAt}</StyledText>
    </div>
  )
};

export default Article;
