import articles from "../localization/articles";
import mapIndexed from "../utils/mapIndexed";
import {values} from "ramda";
import {Button, Flex} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {setSelected} from "../slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch()

  const handleClick = (topic) => {
    dispatch(setSelected(topic))
  }

  const selected = useSelector((state) => state.filter.selected)

  return (
    <Flex justify="space-evenly" w={220} h="60px" wrap="wrap">
      {selected === "all" ?
        <Button key={-1} onClick={() => handleClick('all')} colorScheme="blue" size="xs" isActive>{articles.allArticles}</Button> :
        <Button key={-1} onClick={() => handleClick('all')} colorScheme="blue" size="xs">{articles.allArticles}</Button>
      }
      {mapIndexed((topic, key) => {
        return selected === topic ?
          <Button key={key} onClick={() => handleClick(topic)} colorScheme="blue" size="xs" isActive>{topic}</Button> :
          <Button key={key} onClick={() => handleClick(topic)} colorScheme="blue" size="xs">{topic}</Button>
      }, values(articles.topics))}
    </Flex>
  )
};

export default Filter;
