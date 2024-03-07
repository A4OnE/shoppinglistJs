const addInputData = document.querySelector(".input-add-items");
const addItemsBtn = document.querySelector(".addItemsBtn");
const listItems = document.querySelector(".list-items");
const clearBtn = document.getElementById("clear-btn");
const filterInput = document.getElementById("input-filter");
let isEditMode = false;
const submitItem = (e) => {
  const value = addInputData.value.trim();
  e.preventDefault();
  //   checks duplicate entry in list to prevent
  if (!isEditMode) {
    if (CheckItemIfExistsAlredy(value)) {
      alert("Item already exists");
      return;
    }
  }
  if (value !== "") {
    const list = document.createElement("li");
    const listText = document.createTextNode(value);
    list.appendChild(listText);
    const button = createReusableButton("close-btn");
    list.appendChild(button);
    //    appending list  'i.e li' into  listItems 'i.e ul'
    // add item To DOM
    listItems.appendChild(list);
    // console.log(list);
    // console.log(listItems);

    // add item To Local Storage
    StoreValueInStorage(list.textContent);

    resetUI();
    addInputData.value = "";
  } else {
    alert("Enter an item first");
  }
};
// localstorage ma vako data pailai dekhauna lai ho yo list ma dekhauna
const getDataFromStorage = () => {
  const storedItems = JSON.parse(localStorage.getItem("items"));
  //   "if (storedItems){} condition" chai check garna suruma input field
  //  empty  huda "true" vaye matra run hos vanera rakhne ho code

  if (storedItems) {
    storedItems.forEach((ele) => {
      const list = document.createElement("li");
      const listText = document.createTextNode(ele);
      list.appendChild(listText);
      const button = createReusableButton("close-btn");
      list.appendChild(button);
      // Add item To DOM from LocalStorage
      listItems.appendChild(list);
      resetUI();
    });
  } else {
    // let storageValue;
    if (localStorage.getItem("items") === null) {
      storedItems = [];
    } else {
      storedItems = JSON.parse(localStorage.getItem("items"));
    }

    localStorage.setItem("items", JSON.stringify(storedItems));
  }
};

// const EditModes = () => {
//   if (isEditMode) {
//     addItemsBtn.innerHTML = `<i class="fa-solid fa-plus"></i> add Item`;
//     addItemsBtn.style.backgroundColor = "black";
//     addItemsBtn.style.color = "white";
//   }
// };
const createReusableButton = (item) => {
  const listButton = document.createElement("button");
  listButton.className = item;
  const icon = createReusableIcon("fa-solid fa-xmark");
  listButton.appendChild(icon);
  return listButton;
};
const createReusableIcon = (item) => {
  const listIcon = document.createElement("i");
  listIcon.className = item;
  return listIcon;
};

const filterItemsFromList = (e) => {
  // console.log(listItems)
  const filterTextValue = e.target.value.toLowerCase();
  const allListItems = document.querySelectorAll("li");
  allListItems.forEach((ele) => {
    const listText = ele.textContent.toLowerCase();
    let index = listText.indexOf(filterTextValue);
    if (index === -1) {
      ele.style.display = "none";
    } else {
      ele.style.display = "flex";
    }
  });
};

const editItem = (item) => {
  // change button to updateItem
  if (item.nodeName === "LI") {
    isEditMode = true;

    const lists = document.querySelectorAll("li");
    lists.forEach((ele) => {
      ele.classList.remove("edit-item");
    });
    item.classList.add("edit-item");
    // getting already existing item value in text only with no whitespace using textContent.trim()
    // console.log("oldValue:", item.textContent);
    // this is the inputfield where i can access value by clicking in list item

    addInputData.value = item.textContent.trim();
    // console.log(item.textContent);
    // purano value j cha tei mathi bata leko
    const oldValue = addInputData.value;
    // Change the button text to "Update Item"
    addItemsBtn.innerHTML = `<i class="fa-solid fa-edit"></i> update Item`;
    addItemsBtn.style.backgroundColor = "green";
    addItemsBtn.style.color = "white";
    // first remove addItem button addEventListener click function
    addItemsBtn.removeEventListener("click", submitItem);

    // then add a new function when we want to edit in removeEventListener and submit the data where we needed
    // for updating if isEditMode = true anf we click updateItem Button and it works
    addItemsBtn.addEventListener("click", (e) => {
      if (isEditMode) {
        e.preventDefault();
        // access same addInputData as newValue and it will be the
        //  updated new value after update button is click new value will be inserted
        const newValue = addInputData.value.trim();
        if (newValue !== "") {
          //   console.log(newValue);
          //   local storage ma existing value lai change garna lako aba
          let itemFromStorage = JSON.parse(localStorage.getItem("items")) || [];
          const index = itemFromStorage.indexOf(oldValue);
          //   console.log(index);

          if (index > -1) {
            console.log(index, 1, newValue);
            itemFromStorage.splice(index, 1, newValue);
            localStorage.setItem("items", JSON.stringify(itemFromStorage));
            window.location.reload();
          }
          // Change the button text to "add Item" after submission of data
          addItemsBtn.innerHTML = `<i class="fa-solid fa-plus"></i> add Item`;
          addItemsBtn.style.backgroundColor = "black";
          addItemsBtn.style.color = "white";
          //   isEditMode = false;
          addInputData.value = "";
        } else {
          alert("Enter  an item first");
        }
      }
    });
  }
};
// To check if items in localStorage already exists
const CheckItemIfExistsAlredy = (item) => {
  // checks first is there data is null or not if not then it will checks data  in itemFromStorage
  let itemFromStorage = JSON.parse(localStorage.getItem("items"));
  if (JSON.parse(localStorage.getItem("items")) === null) {
    itemFromStorage = itemFromStorage = [];
  } else {
    itemFromStorage = itemFromStorage.includes(item.toLowerCase());
  }
  return itemFromStorage;
};
const StoreValueInStorage = (item) => {
  //   console.log(item);
  let itemFromStorage;
  if (localStorage.getItem("items") === null) {
    itemFromStorage = [];
  } else {
    itemFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  itemFromStorage.push(item);

  localStorage.setItem("items", JSON.stringify(itemFromStorage));
};
const removeAllItemsFromLists = () => {
  const allListItems = document.querySelectorAll("li");
  for (let i = 0; i < allListItems.length; i++) {
    listItems.removeChild(allListItems[i]);
    resetUI();
    localStorage.clear();
    let storageValue;
    if (localStorage.getItem("items") === null) {
      storageValue = [];
    } else {
      storageValue = JSON.parse(localStorage.getItem("items"));
    }

    localStorage.setItem("items", JSON.stringify(storageValue));
  }
};

const deleteSingleItemFromList = (e) => {
  //   if (e.target.parentElement.classList.contains("close-btn")) {
  //     e.target.parentElement.parentElement.remove();
  //   }'
  // console.log(e.target.nodeName === "I");
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.remove();
    const itemText = e.target.parentElement.parentElement.textContent.trim();
    removeFromLocalStorage(itemText);
    let storageValue;
    if (localStorage.getItem("items") === null) {
      storageValue = [];
    } else {
      storageValue = JSON.parse(localStorage.getItem("items"));
    }

    localStorage.setItem("items", JSON.stringify(storageValue));
    resetUI();
  } else {
    editItem(e.target);
  }
};
const resetUI = () => {
  const alllistItems = document.querySelectorAll("li");
  if (alllistItems.length > 0) {
    clearBtn.style.display = "flex";
    filterInput.style.display = "flex";
  } else {
    clearBtn.style.display = "none";
    filterInput.style.display = "none";
  }
  //   if (isEditMode) {
  //     window.location.reload();
  //   }
};

// const removeFromLocalStorage = (itemText) => {
//   let itemsFromStorage;
//   if (localStorage.getItem("items") === null) {
//     itemsFromStorage = [];
//   } else {
//     itemsFromStorage = JSON.parse(localStorage.getItem("items"));
//   }

//   const updatedItems = itemsFromStorage.filter((item) => item !== itemText);

//   localStorage.setItem("items", JSON.stringify(updatedItems));
// };
const removeFromLocalStorage = (itemText) => {
  //   let itemsFromStorage;
  //   if (localStorage.getItem("items") === null) {
  //     itemsFromStorage = [];
  //   } else {
  //     itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  //   }
  //   console.log(itemsFromStorage);
  //   OR we can  use   let itemsFromStorage = JSON.parse(localStorage.getItem("items")) || [];

  let itemsFromStorage = JSON.parse(localStorage.getItem("items")) || [];
  const index = itemsFromStorage.indexOf(itemText);
  //   console.log(index);
  if (index > -1) {
    itemsFromStorage.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(itemsFromStorage));
  }
  // console.log(updatedItems);
};

document.addEventListener("click", (event) => {
  //   console.log(event.target.closest(".addItemsBtn"));
  const isClickInsideList = event.target.closest(".list-items");
  const isClickOnUpdateButton = event.target.closest(".addItemsBtn");
  const isClickInsideInput = event.target.closest(".input-add-items");

  // Check if the click is outside the list, not on the update button, and not inside the input field
  if (!isClickInsideList && !isClickOnUpdateButton && !isClickInsideInput) {
    // addItemsBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
    // addItemsBtn.style.backgroundColor = "black";
    // addItemsBtn.style.color = "white";

    // const lists = document.querySelectorAll("li");
    // lists.forEach((ele) => {
    //   ele.classList.remove("edit-item");
    // });
    // isEditMode = false;
    window.location.reload();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  resetUI();

  //   updatBtnCloseIfClickedOutsideList();
  getDataFromStorage();
});

listItems.addEventListener("click", deleteSingleItemFromList);
filterInput.addEventListener("input", filterItemsFromList);
clearBtn.addEventListener("click", removeAllItemsFromLists);
addItemsBtn.addEventListener("click", submitItem);
