import {compose, filter, includes, isNil, join, map, reverse, split} from "ramda";

const formatDate = (date) => {
  if (isNil(date)) return "";

  const format = compose(
    map(item => join("/", reverse(split("-", item)))),
    filter(item => includes("-", item)),
    split("T"),
  );

  return format(date)[0];
}

export default formatDate;
