function ajouter(valeur) {
  document.getElementById("ecran").value += valeur;
}

function effacer() {
  document.getElementById("ecran").value = "";
}

function calculer() {
  try {
    let resultat = eval(document.getElementById("ecran").value);
    document.getElementById("ecran").value = resultat;
  } catch (e) {
    document.getElementById("ecran").value = "Erreur";
  }
}
