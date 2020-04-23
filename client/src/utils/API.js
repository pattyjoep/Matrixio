import axios from "axios";

export default {
  // Gets all teachers
  getTeachers: function() {
    return axios.get("/api/teachers");
  },
  // Gets the teacher with the given id
  getTeacher: function(id) {
    return axios.get("/api/teachers/" + id);
  },
  // Deletes the teacher with the given id
  deleteTeacher: function(id) {
    return axios.delete("/api/teachers/" + id);
  },
  // Saves a teacher to the database
  saveTeacher: function(teacherData) {
    return axios.post("/api/teachers/register", teacherData);
  }
};
