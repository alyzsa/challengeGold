import axios from "axios";

export const API = {
  get: async function (endPoint) {
    let headers = {};
    headers.Access_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc`;
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/" + endPoint,
        { headers: headers }
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
};
