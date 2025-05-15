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

  const soundFile = sounds[letter];
  const instrumentName = soundFile.replace('.mp3', '');

  if (!soundFile) {
    console.warn(`Missing sound for ${letter}`);
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

  // ✅ Apenas mostra o nome do instrumento (sem imagem)
  const label = document.createElement('div');
  label.textContent = instrumentName;
  label.classList.add('instrument-label');

  button.innerHTML = '';
  button.appendChild(label);

  currentAudio.addEventListener('ended', () => {
    button.innerHTML = currentLetter;
    currentAudio = null;
    currentButton = null;
    currentLetter = null;
  });
});


