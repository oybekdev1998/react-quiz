import Axios from "axios";

export default Axios.create({
  baseURL: 'https://react-quiz-57d59-default-rtdb.firebaseio.com/'
})