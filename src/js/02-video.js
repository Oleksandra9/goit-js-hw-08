import Player from '@vimeo/player';
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const player = new Player(iframe);


function getTime(event) {
  localStorage.videoplayerCurrentTime = event.seconds;
  console.log(event);
}

player.on('timeupdate', throttle(getTime, 1000));

player.setCurrentTime(localStorage.videoplayerCurrentTime);




