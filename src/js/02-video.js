import Player from '@vimeo/player';

let Iframe = document.querySelector('iframe');
const player = new Player(Iframe);

player.on('play', function () {
  console.log('played the video!');
});
// player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', onPlay);

player.on('loaded', function () {
  if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
});
