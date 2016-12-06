"use strict";
const ready = function() {
  //créer un tableau de prénom
  const people = ["Landry", "Sharon", "Emerson", "Roberto"];
  //1. Trouver dans document le tbody
  const tbody = document.querySelector("tbody");
  //2. Créer un élément
  let tr = document.createElement("tr");
  /*3.Ajouter l'élément
  innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.*/
  tr.innerHTML = "<td>Mary</td>";
  //
  tbody.appendChild(tr);
}
document.addEventListener("DOMContentLoaded",ready);
