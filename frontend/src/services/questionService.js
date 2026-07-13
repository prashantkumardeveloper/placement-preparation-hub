import API from "./api";

// ======================
// Get All Questions
// ======================
export const getQuestions = async (params = {}) => {
  const response = await API.get("/questions", {
    params,
  });

  return response.data;
};

// ======================
// Get Dashboard Stats
// ======================
export const getStats = async () => {
  const response = await API.get("/questions/stats");

  return response.data;
};

// ======================
// Add Question
// ======================
export const addQuestion = async (question) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/questions",
    question,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};