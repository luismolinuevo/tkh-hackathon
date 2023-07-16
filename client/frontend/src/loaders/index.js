import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_SERVER}/post/`,
    });

    // console.log(response);
    const postArray = response.data.getAllPost;

    return postArray;
  } catch (e) {
    console.log(e);
  }
};

export { getPosts };
