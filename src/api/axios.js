import axios from "axios";

export default axios.create({
  baseURL: "http://dev.meridianvoyage.com:5000",
});
