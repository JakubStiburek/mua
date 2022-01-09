import {URL} from "../constants/urls";

const fetchPageData = (endpoint) => fetch(`${URL.RENDER_URL}${endpoint}`).then((res) => res.json())

export default fetchPageData;
