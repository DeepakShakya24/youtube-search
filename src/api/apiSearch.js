import axios from "axios";
let apiKey = process.env.REACT_APP_API_KEY;
const apiSearch = async () => {
  try {
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=reactjs&&type=video&&part=snippet&&key=${apiKey}`
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export default apiSearch;
