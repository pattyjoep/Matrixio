import axios from "axios";

export default {
  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * Teacher  Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  authenticateTeacher: data => {
    console.log("Teacher authentication data!", data);
    return axios.post("/api/teacher/signin", data);
  },

  signupTeacher: data => {
    console.log("Teacher signup data", data);
    return axios.post("/api/teacher/signup", data);
  },

  getAllTeachers: () => {
    return axios.get("/api/teacher");
  },

  createTeacher: teacherData => {
    return axios.post("/api/teacher", teacherData);
  },

  getTeacher: id => {
    return axios.get("/api/teacher/" + id);
  },

  updateTeacher: ({ TeacherID, firstName, lastName, email }) => {
    return axios.put("/api/teacher/" + TeacherID, {
      firstName: firstName,
      lastName: lastName,
      email, email
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
    return axios.post("/api/student", studentData);
  },

  getStudent: id => {
    return axios.get("/api/student/", id);
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

  createMatrix: matrix => {
    return axios.post("/api/matrix", matrix);
  },

  /**
   * TODO: Prevent any object from being passed.
   * Need to figure out how to handle matrices on front end.
   * Currently can pass any object as matrix. Allows updating of ObjectID.
   * Risks data integrity.
   */
  updateMatrix: ({ matrix }, id) => {
    return axios.put("/api/matrix/" + id, matrix);
  },

  deletematrix: id => {
    return axios.delete("/api/matrix/" + id);
  },

  getAllMatrices: () => {
    return axios.get("/api/matrix");
  }
};
