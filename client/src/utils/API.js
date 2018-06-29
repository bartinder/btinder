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

  updateUser: function(userObject) {
    return axios.put("api/updateUser", {...userObject})
  },

  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  likeBar: function(bar) {
    return axios.put("/api/likebar", { bar: bar });
  },

  dislikeBar: function(bar) {
    return axios.put("/api/dislikebar", { bar: bar });
  },

  addFriend: function(friend) {
    console.log(friend)
    return axios.put("/api/friend", {friend: friend});
  },

  getFriend: function(id) {
    return axios.get("/api/friends/" + id);
  }
};
