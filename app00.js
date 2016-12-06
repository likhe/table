"use strict";
const ready = function() {
  const people = [
    { firstname: "Landry", surname: "O'Connor"},
    { firstname: "Sharon", surname: "McConney"},
    { firstname: "Emerson", surname: "Diamonds"},
    { firstname:"Roberto", surname: "De La Muerta"}
  ];
  //créer un tableau de prénom
  const tbody = document.querySelector("tbody");
  //Deb Boucle
    for (var i = 0; i < people.length; i++) {
      //Créer un élément
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${people[i].surname}</td><td>${people[i].firstname}</td>`; //= "<td>people[i].firstname</td>" en gros une autre manière de concaténer
      tbody.appendChild(tr);
    }
  //End boucle
}
document.addEventListener("DOMContentLoaded",ready);
