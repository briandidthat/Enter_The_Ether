import axios from "axios";

export default {
  register: function(user) {
    return axios.post("https://enpay.ethernode.io/accountRPC/accounts", user);
  },
  newOrder: function(userData) {
    return axios.post("https://enpay.ethernode.io/authRPC/authnet", userData);
  }
};
