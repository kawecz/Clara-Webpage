const alphabet = document.querySelector('.alphabet');
let currentAudio = null;
let currentButton = null;
let currentLetter = null;

const labelColors = {
  A: '#000000', C: '#000000', D: '#F2E7DC', I: '#000000',
  M: '#000000', J: '#000000', K: '#000000', O: '#000000',
  S: '#000000', Y: '#000000', Z: '#000000'
};

const sounds = {
  A: 'Accordéon.mp3', B: 'Banjo.mp3', C: 'Clarinette.mp3', D: 'Didgeridoo.mp3',
  E: 'Euphonium.mp3', F: 'Flûte.mp3', G: 'Guitare.mp3', H: 'Harmonica.mp3',
  I: 'Inanga.mp3', J: 'Jumbe.mp3', K: 'Kalimba.mp3', L: 'Lyre.mp3',
  M: 'Mélodica.mp3', N: 'Nébulophone.mp3', O: 'Orgue.mp3', P: 'Piano.mp3',
  Q: 'Quéna.mp3', R: 'Rébec.mp3', S: 'Saxophone.mp3', T: 'Trompette.mp3',
  U: 'Ukulélé.mp3', V: 'Violon.mp3', W: 'Waterphone.mp3', X: 'Xylophone.mp3',
  Y: 'Yunluo.mp3', Z: 'Zurna.mp3'
};

const images = {
  A: 'accordéon.jpg', B: 'banjo.jpg', C: 'clarinette.jpg', D: 'didgeridoo.jpg',
  E: 'euphonium.jpg', F: 'flûte.jpg', G: 'guitare.jpg', H: 'harmonica.jpg',
  I: 'inanga.jpg', J: 'jembe.jpg', K: 'kalimba.jpg', L: 'lyre.jpg',
  M: 'mélodica.jpg', N: 'nébulophone.jpg', O: 'orgue.jpg', P: 'piano.jpg',
  Q: 'quéna.jpg', R: 'rébec.jpg', S: 'saxophone.jpg', T: 'trompette.jpg',
  U: 'ukulélé.jpg', V: 'violon.jpg', W: 'waterphone.jpg', X: 'xylophone.jpg',
  Y: 'yunluo.jpg', Z: 'zurna.jpg'
};

alphabet.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  const letter = li.dataset.letter;
  const soundFile = sounds[letter];
  const imageFile = images[letter];
  if (!soundFile || !imageFile) return;

  const button = li.querySelector('button');
  const instrumentName = soundFile.replace('.mp3', '');

  // Stop previous sound
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Reset previous button
  if (currentButton && currentLetter !== null) {
    currentButton.classList.remove('image-active');
    currentButton.innerHTML = currentLetter;
  }

  currentLetter = letter;
  currentButton = button;

  // Create image + label container
  const container = document.createElement('div');
  container.classList.add('instrument-container');

  const img = document.createElement('img');
  img.src = `../content/instruments/${imageFile}`;
  img.alt = instrumentName;
  img.className = 'instrument-image';

  if (letter === 'C') {
  img.classList.add('clarinet-image');
} else if (letter === 'F') {
  img.classList.add('flute-image')
 } else if(letter === 'H') {
  img.classList.add('harmonica-image')
 }else if(letter === 'I'){
  img.classList.add('inanga-image')
 }else if(letter === 'J'){
  img.classList.add('jumbe-image')
 } else if(letter === 'K') {
  img.classList.add('kalimba-image')
 } else if(letter === 'L'){
  img.classList.add('lyre-image')
 }else if(letter === 'M'){
  img.classList.add('melodica-image')
 }else if(letter === 'N'){
  img.classList.add('nebulophone-image')
 } else if(letter === 'Q') {
  img.classList.add('quena-image')
 } else if(letter === 'R') {
  img.classList.add('rebec-image')
 } else if (letter === 'W') {
  img.classList.add('waterphone-image')
 } else if (letter === 'X') {
  img.classList.add('xylophone-image')
 } else if(letter === 'Y') {
  img.classList.add('yunluo-image')
 } else if (letter === 'Z') {
  img.classList.add('zurna-image')
 }

  const label = document.createElement('div');
  label.textContent = instrumentName;
  label.className = 'instrument-label';
  if (labelColors[letter]) label.style.color = labelColors[letter];

  container.appendChild(img);
  container.appendChild(label);

  // Apply visual changes
  button.classList.add('image-active');
  button.innerHTML = '';
  button.appendChild(container);

  currentAudio = new Audio(`../content/sounds/${soundFile}`);
  currentAudio.play().catch(console.error);

  currentAudio.addEventListener('ended', () => {
    button.classList.remove('image-active');
    button.innerHTML = currentLetter;
    currentAudio = null;
    currentButton = null;
    currentLetter = null;
  });
});
