import Player from '@vimeo/player';
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const player = new Player(iframe);


function getTime(event) {
  localStorage.videoplayerCurrentTime = event.seconds;
}

const upDateEverySecond = throttle(getTime, 1000);

player.on('timeupdate', upDateEverySecond);

player.setCurrentTime(localStorage.videoplayerCurrentTime);




