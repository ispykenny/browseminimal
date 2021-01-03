import axios from 'axios';

const fetcher = (url) => axios(url)
.then((res) => res)
.catch((error) => console.log(error))

export default fetcher;