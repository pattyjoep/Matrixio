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

  createTeacher: data => {
    return axios.post("/api/teacher", data);
  }

  // /api/teacher/students/
  // Gets all of the students
  // getStudents: function() {
  //   return axios.get("/api/teacher" + id + "/students");
  // },
  // // Gets the student with the given id
  // getStudent: function(id) {
  //   return axios.get("/api/teacher" + "/students/" + id);
  // },
  // //Update students data with the given id
  // updateStudent: function(id) {
  //   return axios.get("/api/teacher" + "/students/" + id);
  // },
  // // Deletes the student with the given id
  // deleteStudent: function(id) {
  //   return axios.delete("/api/teacher/students/" + id);
  // }
};
