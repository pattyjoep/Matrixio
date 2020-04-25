import axios from "axios";

export default {
  // /api/teacher --------------------------------------

  authenticateTeacher: () => {
    return axios.get("/api/teacher");
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
