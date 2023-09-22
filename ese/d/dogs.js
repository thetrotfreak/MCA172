function displayDogs() {
  const dogList = document.getElementById("dogs");

  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "./dogs.json";

  xhr.open(method, url, true);

  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      let obj_json = JSON.parse(xhr.responseText);
      obj_json.dogs.forEach((dog) => {
        const dogCard = document.createElement("div");
        dogCard.classList.add("card");
        dogCard.innerHTML = `<strong>Breed:</strong>&nbsp${dog.breed}<br><br>`;
        dogCard.innerHTML += `<strong>Color:</strong>&nbsp${dog.color}<br><br>`;
        dogCard.innerHTML += `<strong>Country:</strong>&nbsp${dog.country}`;
        dogList.appendChild(dogCard);
      });
    }
  };

  xhr.send();
}
window.onload = displayDogs();
