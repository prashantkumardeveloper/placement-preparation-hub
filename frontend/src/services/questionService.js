import API from "./api";

export const getQuestions = async (params = {}) => {
  const response = await API.get("/questions", {
    params,
  });

  return response.data;
};