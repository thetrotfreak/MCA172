function displayBooks() {
  const bookList = document.getElementById("bookList");

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj_json = JSON.parse(this.responseText);

      obj_json.bookList.forEach((element) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = element;
        bookList.appendChild(li);
      });
    }
  };
  xhr.open("GET", "./books.json");
  xhr.send();
}

const fetchBooks = document.getElementById("fetchBooks");
fetchBooks.addEventListener("click", displayBooks);
