const video = document.querySelector('.hero-video');

// This fires as soon as the video actually starts playing
video.onplaying = () => {
    video.classList.add('is-playing');
};