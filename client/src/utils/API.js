import axios from "axios";

export default {
  // /api/teacher --------------------------------------

  authenticateTeacher: data => {
    console.log(data);
    return axios.get("/api/teacher/login", data);
  },

  getAllTeachers: () => {
    return axios.get("/api/teacher");
  },

  createTeacher: teacherData => {
    return axios.post("/api/teacher", teacherData);
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
