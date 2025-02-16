document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  const music = document.getElementById('music');
  music.style.display = 'none';
  const someMusicBtn = document.getElementById('music-link');
  const goBackBtn = document.getElementById('goBack');

  someMusicBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.style.display = 'none';
    music.style.display = 'block';
  });

  goBackBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    main.style.display = 'block';
    music.style.display = 'none';
  });
});
