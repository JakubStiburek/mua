import {URL} from "../constants/urls";

const fetchArticle = (endpoint, id) => fetch(`${URL.RENDER_URL}${endpoint}${id}`).then((res) => res.json())

export default fetchArticle;
