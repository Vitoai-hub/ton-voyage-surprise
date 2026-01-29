function fabrication() {
  // Récupération des valeurs (IDs réels)
  const controle = document.getElementById("controle").value;   // A..E recommandé
  const duree = document.getElementById("duree").value;         // 1..10
  const intensity = document.getElementById("intensity").value; // 1..4
  const comfort = document.getElementById("comfort").value;     // 1..3

  // Vérification
  if (!controle || !duree || !intensity || !comfort) {
    alert("Choisis une option dans chacun des quatre blocs ✨");
    return;
  }

  // (Recommandé) Stockage pour resultat.html
  localStorage.setItem("controle", controle);
  localStorage.setItem("duree", duree);
  localStorage.setItem("intensity", intensity);
  localStorage.setItem("comfort", comfort);

  // Ton code (ordre volontaire)
  const code = `${duree}${controle}${intensity}${comfort}`;
  localStorage.setItem("voyage_code", code);

  // Redirection
  window.location.href = `resultat.html?code=${encodeURIComponent(code)}`;
}
