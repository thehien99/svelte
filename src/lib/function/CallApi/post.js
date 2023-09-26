import appAxios from "../../../URL/Api";

const dataPost = async (query) => {
  try {
    const res = await appAxios({
      method: "get",
      url: `/limit`,
      params: query,
    });
    return res
  } catch (error) {
    console.log(error)
  }
};
export default dataPost