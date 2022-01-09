import articles from "../localization/articles";
import mapIndexed from "../utils/mapIndexed";
import {values} from "ramda";
import {Button, Flex} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {setSelected} from "../slices/filterSlice";
import {useMediaQuery} from "@mui/material";

const Filter = () => {
  const dispatch = useDispatch()
  const buttonSize = useMediaQuery('(min-width: 481px)') ? "md" : "xs";
  const selected = useSelector((state) => state.filter.selected)

  const handleClick = (topic) => {
    dispatch(setSelected(topic))
  }

  return (
    <Flex justify="space-evenly" w={[220, 330, 600]} h={["60px", "100px", "60px"]} wrap="wrap">
      {selected === "all" ?
        <Button key={-1} onClick={() => handleClick('all')} colorScheme="green" size={buttonSize} isActive>{articles.allArticles}</Button> :
        <Button key={-1} onClick={() => handleClick('all')} colorScheme="green" size={buttonSize}>{articles.allArticles}</Button>
      }
      {mapIndexed((topic, key) => {
        return selected === topic ?
          <Button key={key} onClick={() => handleClick(topic)} colorScheme="green" size={buttonSize} isActive>{topic}</Button> :
          <Button key={key} onClick={() => handleClick(topic)} colorScheme="green" size={buttonSize}>{topic}</Button>
      }, values(articles.topics))}
    </Flex>
  )
};

export default Filter;
