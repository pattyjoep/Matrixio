import axios from "axios";

export default {
  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * Teacher  Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  authenticateTeacher: data => {
    return axios.post("/api/teacher/login", data);
  },

  getAllTeachers: () => {
    return axios.get("/api/teacher/");
  },

  createTeacher: teacherData => {
    return axios.post("/api/teacher/", teacherData);
  },

  getTeacher: id => {
    return axios.get("/api/teacher/" + id);
  },

  updateTeacher: ({ TeacherID, firstName, lastName, email }) => {
    return axios.put("/api/teacher/" + TeacherID, {
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  },

  deleteTeacher: id => {
    return axios.delete("/api/teacher/", { data: { id } });
  },

  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * Student  Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  // getAllStudents: () => {
  //   return axios.get("/api/student");
  // },

  createStudent: studentData => {
    return axios.post("/api/student/", studentData);
  },

  getStudent: id => {
    return axios.get("/api/student/" + id);
  },

  updateStudent: ({ StudentID, firstName, lastName }) => {
    return axios.put("/api/student/" + StudentID, {
      firstName: firstName,
      lastName: lastName
    });
  },

  deleteStudent: id => {
    return axios.delete("/api/student/", { data: { id } });
  },

  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * Matrix Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  createMatrix: matrixData => {
    return axios.post("/api/matrix/", matrixData);
  },

  updateMatrix: ({ MatrixID, title, matrix }, id) => {
    return axios.put("/api/matrix/" + id, { MatrixID, title, matrix });
  },

  deleteMatrix: id => {
    return axios.delete("/api/matrix/", { data: { id } });
  },

  getAllMatrices: () => {
    return axios.get("/api/matrix/");
  }
};
