function ajouter(valeur) {
  document.getElementById("ecran").value += valeur;
}

function effacer() {
  document.getElementById("ecran").value = "";
}

function calculer() {
  try {
    let resultat = eval(document.getElementById("ecran").value);
    let the_result = resultat
    document.getElementById("ecran").value = the_result;
  } catch (e) {
    document.getElementById("ecran").value = "Erreur";
  }
}
