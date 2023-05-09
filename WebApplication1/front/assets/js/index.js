import { sendFile, setSort } from "./api/index.js";

const sortSendButton = document.getElementById("sortButton");
const fileInput = document.getElementById("fileInput");

let defaultList = [];

const clearList = (list) => {
  list.innerHTML = "";
};

const renderList = (array, listName) => {
  const list = document.getElementById(listName);

  clearList(list);

  const showList = array.map((item) => {
    return `
      <li class="main__list-item">
        ${item}
      </li>
    `;
  });

  list.insertAdjacentHTML("beforeend", showList.join(""));
};

const handleSendFile = async (event) => {
  const file = event.target.files[0];

  try {
    const response = await sendFile(file);
    defaultList = response;

    renderList(response, "mainList");
  } catch (error) {
    throw new Error(error);
  }
};

const handleSetSort = async () => {
  const sortSelectValue = document.getElementById("sortSelect").value;
  if (!sortSelectValue) return;

  try {
    const response = await setSort({
      list: defaultList,
      method: sortSelectValue,
    });

    renderList(response, "resultList");
  } catch (error) {
    throw new Error(error);
  }
};

fileInput.addEventListener("change", (event) => handleSendFile(event));
sortSendButton.addEventListener("click", handleSetSort);
