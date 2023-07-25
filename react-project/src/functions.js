const BASE_URL = 'https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/';

var api = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    localStorage.setItem("users", JSON.stringify(response.data));
    console.log("fetch done")
  } catch (errors) {
    console.error(errors);
  }
};