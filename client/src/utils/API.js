import axios from "axios";

export default {
  // /api/teacher --------------------------------------

  authenticateTeacher: data => {
    console.log("Teacher authentication data!", data);
    //Post request is used because get does not accept req.body, /login was missing which was needed from the /login route on the backend
    return axios.post("/api/teacher/login", data);
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
  },
  // ------------------------------------------------------------

  getAllStudents: () => {
    return axios.get("/api/student");
  },

  createStudent: studentData => {
    return axios.post("/api/student", studentData);
  },

  getStudent: id => {
    return axios.get("/api/student/", id);
  },

  updateStudent: id => {
    return axios.put("/api/student" + id);
  },

  deleteStudent: id => {
    return axios.delete("/api/student/", id);
  }
};
