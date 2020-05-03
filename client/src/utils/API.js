import axios from "axios";

export default {

  /**
  * * * * * * * * * * * * * * * * * * * * * *
  * * * * * * Teacher  Routes * * * * * * * *
  * * * * * * * * * * * * * * * * * * * * * *
  * */ 

  authenticateTeacher: data => {
    console.log("Teacher authentication data!", data);
    return axios.post("/api/teacher/login", data);
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

  updateTeacher: ({ TeacherID, firstName, lastName }) => {
    return axios.put("/api/teacher/" + TeacherID, {
      firstName: firstName,
      lastName: lastName
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

  // updateStudent: id => {
  //   return axios.put("/api/student" + id);
  // },

  deleteStudent: id => {
    return axios.delete("/api/student/", {data: { id } });
  },
  

  /**
  * * * * * * * * * * * * * * * * * * * * * *
  * * * * * * * Matrix Routes * * * * * * * *
  * * * * * * * * * * * * * * * * * * * * * *
  * */

  createMatrix: matrix => {
    console.log("axios - creatematrix");
    return axios.post("/api/matrix", matrix);
  },  
  
  updateMatrix: ({ matrix }, id) => {
    console.log("axios - updatematrix");
    return axios.put("/api/matrix/" + id, matrix);
  },

  deletematrix: id => {
    console.log("axios - deletematrix");
    return axios.delete("/api/matrix/" + id)
  }
  
};
