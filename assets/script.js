const alphabet = document.querySelector('.alphabet');

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
    // Add more: B: 'banjo.mp3', C: 'cello.mp3', etc.
  };

  const filename = sounds[letter];
  if (!filename) {
    console.warn(`No sound assigned for ${letter}`);
    return;
  }

  const audio = new Audio(`../content/sounds/${filename}`);
  audio.play();
});

