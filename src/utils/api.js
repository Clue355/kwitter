import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
      return err;
    }
  }

  //get a list of messages
  async getMessage() {
    try {
      const result = await this.axiosInstance
        .get("/messages?limit=100&offset=0")
        .then((response) => {
          console.log(response);
          return response;
        });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  // create a message
  async postMessages() {
    try {
      const result = await this.axiosInstance
        .post("messages")
        .then((response) => {
          console.log(response);
        });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  //check messages
  async getMessageById() {
    try {
      const result = await this.axiosInstance
        .get("/messages")
        .then((response) => {
          console.log(response);
        });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  //delete a message
  // async deleteMessages ({}) {
  //   try {
  //     const result = await this.axiosInstance.delete('/messages/messageid')
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     return result
  //   } catch (err) {
  //     helpMeInstructor(err)
  //       return err
  //   }
  // }

  async addLike(id) {
    try {
      const result = await this.axiosInstance
        .post("/likes", { messageId: id })
        .then((response) => {
          console.log(response);
          return response;
        });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async removeLike(id) {
    try {
      const result = await this.axiosInstance
        .delete(`/likes/${id}`)
        .then((response) => {
          console.log(response);
          return response;
        });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
