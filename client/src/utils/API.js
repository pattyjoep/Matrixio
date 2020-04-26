import axios from "axios";

export default {
  // /api/teacher --------------------------------------

  authenticateTeacher: data => {
    console.log("Teacher authentication data!", data);
    return axios.get("/api/teacher", data);
  },

  getAllTeachers: () => {
    return axios.get("/api/teacher");
  },

  // /api/teacher/:id -------------------------------
  getTeacher: id => {
    return axios.get("/api/teacher" + id);
  },

  updateTeacher: id => {
    return axios.put("/api/teacher" + id);
  },

  deleteTeacher: id => {
    return axios.delete("/api/teacher" + id);
  }
};
