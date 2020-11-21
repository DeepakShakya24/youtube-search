import axios from "axios";
const apiSearch = async () => {
  try {
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=reactjs&&type=video&&part=snippet&&key=${process.env.REACT_APP_API_KEY}`
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

export default apiSearch;
