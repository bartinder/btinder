import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },

  getBars: function() {
    return axios.get("/api/bars");
  },

  getUser: function(id) {
    return axios.get("/api/users" + id);
  },

  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
