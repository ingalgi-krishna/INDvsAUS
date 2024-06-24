const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const iframe = document.getElementById('media-iframe');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    const player = iframe.contentWindow;
    if (isPlaying) {
        player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        playPauseBtn.textContent = 'Play';
    } else {
        player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    iframe.contentWindow.postMessage(`{"event":"command","func":"setVolume","args":[${volume * 100}]}`, '*');
});
