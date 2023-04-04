const todo = document.querySelector("input");
const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const list = document.querySelector("ul");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (todo.value == "") {
    return;
  } else {
    list.innerHTML += `<li><input type="checkbox" class="checkbox"/> <span> ${todo.value} </span><aside><i class='fa-solid fa-trash delete-icon'></i><aside></li>`;

    const deleteIcons = document.querySelectorAll(".delete-icon");
    const editIcons = document.querySelectorAll(".edit-icon");
    const checkboxes = document.querySelectorAll(".checkbox");

    deleteIcons.forEach((icon) => {
      console.log(icon);
      icon.addEventListener("click", () => {
        const aside = icon.parentElement;
        aside.parentElement.innerHTML = "";
      });
    });

    editIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        const aside = icon.parentElement;
        // console.log(aside.parentElement.firstChild.nextSibling);
        aside.parentElement.firstChild.nextSibling += "<input type='text' />";
      });
    });

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", () => {
        console.log("hey");
        if (checkbox.checked) {
          checkbox.nextElementSibling.style.textDecoration = "line-through";
        } else {
          checkbox.nextElementSibling.style.textDecoration = "none";
        }
      });
    });
  }

  todo.value = "";
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
