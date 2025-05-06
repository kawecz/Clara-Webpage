const alphabet = document.querySelector('.alphabet');
let currentAudio = null;
let currentButton = null;
let currentLetter = null;

alphabet.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  const letter = li.dataset.letter;

  const sounds = {
    A: 'accordeon.mp3',
    B: 'banjo.mp3',
    C: 'clarinette.mp3',
    D: 'didgeridoo.mp3',
    E: 'euphonium.mp3',
    F: 'flute.mp3',
    G: 'guitare.mp3',
    H: 'harmonica.mp3',
    I: 'inanga.mp3',
    J: 'jumbe.mp3',
    K: 'kalimba.mp3',
    L: 'lyre.mp3',
    M: 'melodica.mp3',
    N: 'nebulophone.mp3',
    O: 'orgue.mp3',
    P: 'piano.mp3',
    Q: 'quena.mp3',
    R: 'rebec.mp3',
    S: 'saxophone.mp3',
    T: 'trompette.mp3',
    U: 'ukulele.mp3',
    V: 'violon.mp3',
    W: 'waterphone.mp3',
    X: 'xylophone.mp3',
    Y: 'yunluo.mp3',
    Z: 'zither.mp3'
  };

  const images = {
    A: 'accordeon.png',
    B: 'banjo.png',
    C: 'clarinette.png',
    D: 'didgeridoo.png',
    E: 'euphonium.png',
    F: 'flute.png',
    G: 'guitare.png',
    H: 'harmonica.png',
    I: 'inanga.png',
    J: 'jumbe.png',
    K: 'kalimba.png',
    L: 'lyre.png',
    M: 'melodica.png',
    N: 'nebulophone.png',
    O: 'orgue.png',
    P: 'piano.png',
    Q: 'quena.png',
    R: 'rebec.png',
    S: 'saxophone.png',
    T: 'trompette.png',
    U: 'ukulele.png',
    V: 'violon.png',
    W: 'waterphone.png',
    X: 'xylophone.png',
    Y: 'yunluo.png',
    Z: 'zither.png'
  };

  const soundFile = sounds[letter];
  const imageFile = images[letter];
  const instrumentName = soundFile.replace('.mp3', '');

  if (!soundFile || !imageFile) {
    console.warn(`Missing sound or image for ${letter}`);
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (currentButton && currentLetter) {
    currentButton.innerHTML = currentLetter;
  }

  currentAudio = new Audio(`../content/sounds/${soundFile}`);
  currentAudio.play().catch(err => {
    console.error("Audio playback error:", err);
  });

  const button = li.querySelector('button');
  currentLetter = button.textContent;
  currentButton = button;

  const img = document.createElement('img');
  img.src = `../content/img/${imageFile}`;
  img.alt = instrumentName;
  img.classList.add('instrument-image');

  const label = document.createElement('div');
  label.textContent = instrumentName;
  label.classList.add('instrument-label');

  button.innerHTML = '';
  button.appendChild(img);
  button.appendChild(label);

  currentAudio.addEventListener('ended', () => {
    button.innerHTML = currentLetter;
    currentAudio = null;
    currentButton = null;
    currentLetter = null;
  });
});


