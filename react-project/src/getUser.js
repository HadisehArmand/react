import axios from "axios";
import SetAction from "./addLogsys";

function getUser() {
    axios.get(`https://64b53279f3dbab5a95c6e9e2.mockapi.io/api/v1/user/`)
    .then(res => {
       const persons = res.data;
       localStorage.setItem("users", JSON.stringify(persons));
       console.log("done")
       SetAction("fetech User", "ok")
    })
 }
 export default getUser;