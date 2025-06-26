
const video = document.getElementById('myVideo');
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const customPlayPause = document.getElementById('customPlayPause');

  customPlayPause.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'inline';
    } else {
      video.pause();
      playButton.style.display = 'inline';
      pauseButton.style.display = 'none';
    }
  });

  // Optional: sync button when user uses native controls
  video.addEventListener('play', () => {
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
  });

  video.addEventListener('pause', () => {
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
  });

//   logic for sliders

  const testimonials = document.querySelectorAll('.testimonial');
const indicators = document.querySelectorAll('.sec6_bottom span');

indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Hide all testimonials
        testimonials.forEach(t => t.classList.remove('active'));
        indicators.forEach(d => d.classList.remove('active'));

        // Show the selected one
        testimonials[index].classList.add('active');
        dot.classList.add('active');
    });
});

// Set initial active states
testimonials[0].classList.add('active');
indicators[0].classList.add('active');

