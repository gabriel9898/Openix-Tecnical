const films = [
  "./assets/images/angry-bird.jpg",
  "./assets/images/blacklight.jpg",
  "./assets/images/harry-potter.jpg",
  "./assets/images/marvels-avengers.jpg",
  "./assets/images/matrix-resurrections.jpg",
  "./assets/images/resident-evil.jpg",
  "./assets/images/venom-matanza.jpg",
  "./assets/images/x-men-days-of-future-past.jpg",
];

for (var i = 0; i < films.length; i++) {
  document.getElementById('img'+ (i+1)).src = films[i];
 
}

