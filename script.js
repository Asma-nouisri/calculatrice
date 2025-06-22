function ajouter(valeur) {
  document.getElementById("ecran").value += valeur;
}
console.log('hello asma');
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

function racineCarree() {
  try {
    let valeur = parseFloat(document.getElementById("ecran").value);
    if (valeur < 0) {
      document.getElementById("ecran").value = "Erreur";
    } else {
      let resultat = Math.sqrt(valeur);
      document.getElementById("ecran").value = resultat;
    }
  } catch (e) {
    document.getElementById("ecran").value = "Erreur";
  }
}
