const remoteURL = "http://localhost:8000";

export default {
  get(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("codeproject_token")}`
      }
    }).then(data => data.json());
  },
  getAll(database, queryParams) {
    let url = `${remoteURL}/${database}`;
    if (queryParams) {
      url += `?${queryParams}`;
    }
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("codeproject_token")}`
      }
    }).then(data => data.json());
  },
  delete(database, id) {
    return fetch(`${remoteURL}/${database}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("codeproject_token")}`
      }
    })
  },
  post(database, newData) {
    return fetch(`${remoteURL}/${database}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("codeproject_token")}`
      },
      body: JSON.stringify(newData)
    }).then(data => data.json());
  },
  put(database, editedItem) {
    return fetch(`${remoteURL}/${database}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("codeproject_token")}`
      },
      body: JSON.stringify(editedItem)
    })
  }
};
