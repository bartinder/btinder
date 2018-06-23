import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/users");
  },

  getBars: function() {
    return axios.get("/api/bars");
  },

    searchUser:function(search) {
      return axios.post("/api/users/search", search );
    },

    deleteUser: function(id) {
      return axios.delete("/api/users/" + id);
    },

  getUser: function(id) {
    return axios.get("/api/users" + id);
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
