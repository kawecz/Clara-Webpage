const alphabet = document.querySelector('.alphabet');
let currentAudio = null; // 🔊 Track currently playing audio

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

  const filename = sounds[letter];
  if (!filename) {
    console.warn(`No sound assigned for ${letter}`);
    return;
  }

  // 🔇 Stop current sound if playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // ▶️ Play new sound
  currentAudio = new Audio(`../content/sounds/${filename}`);
  currentAudio.play().catch(err => {
    console.error("Audio playback error:", err);
  });
});


