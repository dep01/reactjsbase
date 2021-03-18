class ApiClient {
  static baseUrl = "";
  static get = async ({ auth = false, endpoint = "" }) => {
    const token = "";
    return await fetch(this.baseUrl + endpoint, {
      method: "GET",
      headers: {
        Accept: "application/vnd.union+json; version=1.0",
        "Content-Type": "application/json",
        Authorization: auth ? "Bearer " + token : "",
      },
    });
  };
  static post = async ({ auth = false, endpoint = "", body = {} }) => {
    const token = "";
    return await fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: {
        Accept: "application/vnd.union+json; version=1.0",
        "Content-Type": "application/json",
        Authorization: auth ? "Bearer " + token : "",
      },
      body: JSON.stringify(body),
    });
  };
  static del = async ({ auth = false, endpoint = "" }) => {
    const token = "";

    return await fetch(this.baseUrl + endpoint, {
      method: "DELETE",
      headers: {
        Accept: "application/vnd.union+json; version=1.0",
        "Content-Type": "application/json",
        Authorization: auth ? "Bearer " + token : "",
      },
    });
  };
  static put = async ({ auth = false, endpoint = "", body = {} }) => {
    const token = "";

    return await fetch(this.baseUrl + endpoint, {
      method: "PUT",
      headers: {
        Accept: "application/vnd.union+json; version=1.0",
        "Content-Type": "application/json",
        Authorization: auth ? "Bearer " + token : "",
      },
      body: JSON.stringify(body),
    });
  };
}

export default ApiClient;
