import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_SERVER}/post/`,
    });

    if (response) {
      // console.log(response);
      const postArray = response.data.getAllPost;

      return postArray;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e, "asdsadasd");
  }
};

const getIncentives = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_SERVER}/dsire`,
    });

    console.log(response);

    if (response) {
      const data = response.data.dsire_response;
      const itemsWithStates = data.filter(
        (items) => items.State !== undefined && items.WebsiteUrl !== ""
      );
      return itemsWithStates;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e, "ASDsadsad");
  }
};
export { getPosts, getIncentives };
