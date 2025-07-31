const adsBtn = document.getElementById("ads-btn");
const mainContent = document.getElementById("main-content");
const modal = document.getElementById("trailer-modal");
const closeBtn = document.querySelector(".close-btn");

adsBtn.addEventListener('click', function () {
  modal.style.display = 'flex';
  mainContent.style.filter = 'blur(6px)';
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  mainContent.style.filter = 'none';

  // Stop the video playback when closed
  const iframe = modal.querySelector('iframe');
  iframe.src = iframe.src;
});
