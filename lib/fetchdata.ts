import axios from "axios";

const dataFetcher = (url: string) => axios.get(url).then(res => res.data);

export default dataFetcher






