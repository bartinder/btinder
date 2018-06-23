import axios from "axios";

export default {
    // Gets all books
    getUsers: function() {
      return axios.get("/api/users");
    },

    getUser: function(id) {
      return axios.get("/api/users" + id);
    },

    searchUser:function(search) {
      return axios.post("/api/users/search", search );
    },

    deleteUser: function(id) {
      return axios.delete("/api/users/" + id);
    },

    saveUser: function(userData) {
      return axios.post("/api/users", userData);
    }

};