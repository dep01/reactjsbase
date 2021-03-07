const baseUrl = "";
export const get = async ({ auth = false, endpoint = "" }) => {
  const token = "";

  return await fetch(baseUrl + endpoint, {
    method: "GET",
    headers: {
      Accept: "application/vnd.union+json; version=1.0",
      "Content-Type": "application/json",
      Authorization: auth ? "Bearer " + token : "",
    },
  });
};
export const post = async ({ auth = false, endpoint = "", body = {} }) => {
  const token = "";
  return await fetch(baseUrl + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/vnd.union+json; version=1.0",
      "Content-Type": "application/json",
      Authorization: auth ? "Bearer " + token : "",
    },
    body: JSON.stringify(body),
  });
};
export const del = async ({ auth = false, endpoint = "" }) => {
  const token = "";

  return await fetch(baseUrl + endpoint, {
    method: "DELETE",
    headers: {
      Accept: "application/vnd.union+json; version=1.0",
      "Content-Type": "application/json",
      Authorization: auth ? "Bearer " + token : "",
    },
  });
};
export const put = async ({ auth = false, endpoint = "", body = {} }) => {
  const token = "";

  return await fetch(baseUrl + endpoint, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.union+json; version=1.0",
      "Content-Type": "application/json",
      Authorization: auth ? "Bearer " + token : "",
    },
    body: JSON.stringify(body),
  });
};
