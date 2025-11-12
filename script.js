function upDate(previewPic) {
  console.log("Image survolée :", previewPic.alt);
  console.log("URL :", previewPic.src);

  // Changer le texte
  document.getElementById('image').innerHTML = previewPic.alt;

  // Changer l’image d’arrière-plan
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Souris retirée");
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  document.getElementById('image').style.backgroundImage = "url('')";
}
