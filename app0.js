"use strict";
const ready = function() {
  //créer un tableau de prénom
  const tbody = document.querySelector("tbody");
  const people = [
    { firstname: "Landry", surname: "O'Connor"},
    { firstname: "Sharon", surname: "McConney"},
    { firstname: "Emerson", surname: "Diamonds"},
    { firstname:"Roberto", surname: "De La Muerta"}
  ];
  //Deb Boucle
    for (var i = 0; i < people.length; i++) {
      //Créer un élément
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      //ajouter un nouveau noeud (=élément) de textes
      let firstname = document.createTextNode(people[i].firstname);
      let surname = document.createTextNode(people[i].surname);
      tr.appendChild(surname);
      td.appendChild(firstname);
      tr.appendChild(td);
      tbody.appendChild(tr);
    }
  //End boucle
}
document.addEventListener("DOMContentLoaded",ready);
