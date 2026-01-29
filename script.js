function fabrication() {

  // Récupération des valeurs
  const controle = document.getElementById("controle").value;
  const duree = document.getElementById("duree").value;
  const aventure = document.getElementById("aventure").value;
  const confort = document.getElementById("confort").value;

  // Vérification
  if (!controle || !duree || !aventure || !confort) {
    alert("Choisis une option dans chacun des quatre blocs ✨");
    return;
  }

  // Création du code (ordre volontaire)
  const code = `${duree}${controle}${aventure}${confort}`;

  // Verrouillage doux : on stocke le code
  localStorage.setItem("voyage_code", code);

  // Redirection vers la page résultat
  window.location.href = `resultat.html?code=${code}`;
}
function getMaxActivitiesByDuration(n) {
  if (n <= 3) return 2;
  if (n <= 5) return 3;
  if (n <= 8) return 4;
  if (n <= 12) return 5;
  return 6;
}
