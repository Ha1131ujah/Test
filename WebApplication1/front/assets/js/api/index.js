export const sendFile = async (file) => {
  const formData = new FormData();

  if (file) {
    formData.append("file", file);
  }

  return fetch("https://localhost:7074/api/File/Upload", {
    method: "POST",
    body: formData,
  }).then((data) => data.json());
};

export const setSort = async (body) => {
  const response = await fetch("https://localhost:7074/api/File/Sort", {
    method: "POST",
    body: JSON.stringify(body),

    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());

  if (response.message) alert(response.message);
  else return response;
};
