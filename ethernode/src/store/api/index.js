import axios from "axios";
export const API_URL = "https://api.ethernode.io/";

export function* get(url, headers = {}) {
    return yield axios
      .get(API_URL + url, headers)
      .then(response => {
        return { data: response.data };
      })
      .catch(error => {
        return { error: error };
      });
}